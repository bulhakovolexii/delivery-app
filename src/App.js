import { Route, Routes } from "react-router-dom";
import Header from "./components/global/header";
import Main from "./pages/main";
import Cart from "./pages/cart";
import { Container, Toolbar } from "@mui/material";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Toolbar variant="dense" />
        <Container sx={{ height: "calc(100% - 80px)" }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
      </main>
    </div>
  );
}
