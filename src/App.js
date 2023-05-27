import { Route, Routes } from "react-router-dom";
import { Container, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import { db } from "./firebase"
import { collection, collectionGroup, getDocs } from "firebase/firestore";
import Header from "./components/global/header";
import Main from "./pages/main";
import Cart from "./pages/cart";

export default function App() {
  const [cart, setCart] = useState([]);
  const [shops, setShops] = useState([]);
  const [goods, setGoods] = useState([]);

  const fetchShops = async () => {
    await getDocs(collection(db, "shops"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setShops(newData);
      })
  }

  const fetchGoods = async () => {
    await getDocs(collectionGroup(db, "goods"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id, shop: doc.ref.parent.parent.id }));
        setGoods(newData);
      })
  }

  useEffect(() => {
    fetchShops();
    fetchGoods();
  }, [])

  const addGoodInCart = (good) => {
    setCart(cart => [...cart, good]);
    good.isInCart = true;
    good.pieces = 1;
  }
  const removeGoodFromCart = (good) => {
    setCart(cart.filter(item => (item.name !== good.name)))
    setGoods(
      goods.map(item => (
        item.name === good.name
          ? { ...item, isInCart: false }
          : item))
    )
  }
  const setPiecesOfGood = (good, value) => {
    setCart(
      cart.map(item => (
        item.name === good.name
          ? { ...item, pieces: value }
          : item))
    )
  }
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Toolbar variant="dense" />
        <Container sx={{ height: "calc(100% - 80px)" }}>
          <Routes>
            <Route path="/delivery-app/" element={
              <Main addGoodInCart={addGoodInCart} shops={shops} goods={goods} />
            } />
            <Route path="/delivery-app/cart" element={
              <Cart cart={cart} removeGoodFromCart={removeGoodFromCart} setPiecesOfGood={setPiecesOfGood} />
            } />
          </Routes>
        </Container>
      </main>
    </div>
  );
}
