// src/App.js
import React from 'react';
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Cart from './components/Cart';
import Menu from "./components/Menu";
import { CartProvider } from './CartContext';  // Adjust the import path
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import CartSec from './pages/CartSec'

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/cartsec" element={<CartSec />} />
        </Routes>
        <ToastContainer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
