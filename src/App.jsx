import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu"
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import MenuFood from "./pages/MenuFood";
import StoreLocation from "./pages/StoreLocation";
import Cart from "./pages/Cart";
import { useState } from "react";
import Receipt from "./pages/Receipt";


function App() {
  const [cart , setCart] = useState([])
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/MenuFood" element={<MenuFood/>}/>
        <Route path="contact" element={<ContactUs/>} />
        <Route path="/storeLocation" element={<StoreLocation/>}/>
        <Route path="/receipt" element={<Receipt/>}/>

        <Route path="/cart" element={<Cart/>} setCart={setCart} cart={cart}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
