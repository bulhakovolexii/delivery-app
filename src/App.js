import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { db } from "./firebase"
import { addDoc, collection, collectionGroup, getDocs, Timestamp } from "firebase/firestore";

import { Container, Toolbar } from "@mui/material";

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
          .map((doc) => ({ ...doc.data(), id: doc.id, shop: doc.ref.parent.parent.id }))
          .sort((a, b) => {
            const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
            if (nameA < nameB)
              return -1
            if (nameA > nameB)
              return 1
            return 0
          });
        setGoods(newData);
      })
  }

  useEffect(() => {
    fetchShops();
    fetchGoods();
  }, [])

  const postOrder = async (clientData, cart) => {
    await addDoc(collection(db, "orders"), {
      clientData,
      cart: cart.map(good => ({
        id: good.id,
        name: good.name,
        shop: good.shop,
        pieces: good.pieces,
      })),
      time: Timestamp.now(),
    })
    setCart([]);
    setGoods(goods.map(good => (
      { ...good, isInCart: false }
    )))
  }

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
    value = value === "" ? 1 : +value
    setCart(
      cart.map(item => (
        item.name === good.name
          ? { ...item, pieces: value }
          : item))
    )
  }

  return (
    <div className="app">
      <Header cart={cart} />
      <main className="content">
        <Toolbar variant="dense" />
        <Container sx={{ height: "calc(100% - 80px)" }}>
          <Routes>
            <Route path="/" element={
              <Main addGoodInCart={addGoodInCart} shops={shops} goods={goods} />
            } />
            <Route path="/cart" element={
              <Cart
                cart={cart}
                removeGoodFromCart={removeGoodFromCart}
                setPiecesOfGood={setPiecesOfGood}
                postOrder={postOrder}
              />
            } />
          </Routes>
        </Container>
      </main>
    </div>
  );
}
