import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Function to save cart items to localStorage
  const saveCartItems = (items) => {
    setCartItems(items);
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  const addToCart = (item) => {
    console.log("Adding item to cart:", item);
    saveCartItems([...cartItems, item]);
    toast.success(`${item.item_Name} has been added to the cart!`);
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.item_Name !== item.item_Name
    );
    saveCartItems(updatedCartItems);
    toast.info(`${item.item_Name} has been removed from the cart!`);
  };

  return (
    <>
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
    <ToastContainer />
    </>
    
  );
};
