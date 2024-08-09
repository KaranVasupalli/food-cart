import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext'; // Adjust the import path
import { auth } from '../components/firebase'; // Adjust the import path
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const totalAmount = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price);
    return total + (isNaN(itemPrice) ? 0 : itemPrice);
  }, 0);

  const handleCheckout = () => {
    if (!isLoggedIn) {
      alert('Please log in to proceed with the checkout.');
      navigate('/login'); // Redirect to login page
    } else {
      // Simulate order completion
      setIsOrderCompleted(true);
      // Optionally clear the cart
      // You might want to clear the cart items after checkout is completed
      // localStorage.removeItem('cartItems'); // If you're using localStorage
    }
  };

  return (
    <>
      <div className='flex justify-center mt-6'>
        <div className="cart-container border p-4 w-[850px] bg-[#FDFBF9]">
          <h2 className="text-2xl text-center mb-4 text-black">Your Cart</h2>
          {isOrderCompleted ? (
            <div className='flex flex-col text-center h-[550px] justify-center items-center'>
              <h3 className='text-3xl text-black'>Order Completed</h3>
              <p className='text-black mt-4 text-xl'>Thank you for your purchase!</p>
            </div>
          ) : (
            <>
              {cartItems.length > 0 ? (
                <>
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex flex-col border border-gray-200 p-4 mb-4 text-black">
                      <img src={item.image_url} alt={item.item_Name} className="object-contain w-[70%] mr-auto ml-auto h-[200px] pb-6" />
                      <p className="text-black text-center mt-2">{item.item_Name}</p>
                      <p className="text-black text-center mt-2">
                        ${isNaN(parseFloat(item.price)) ? "0.00" : parseFloat(item.price).toFixed(2)}
                      </p>
                      <div className='flex justify-center'>
                        <button 
                          className='bg-red-300 py-2 px-16 rounded-md'
                          onClick={() => removeFromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="text-black text-center mt-6">
                    <h3 className="text-xl">Total Amount: ${totalAmount.toFixed(2)}</h3>
                  </div>
                  <div className='flex justify-center mt-8'>
                    <button 
                      className='bg-green-400 text-2xl py-2 px-4 rounded-md'
                      onClick={handleCheckout}
                    >
                      Checkout
                    </button>
                  </div>
                </>
              ) : (
                <div className='bg-[#FDFBF9]'>
                  <div className='flex justify-center'>
                    <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjM4ZXJlaTlxZ2R4MmZyN3dzeGJ6MW5pc3JsdmgxampzdmtoN3FldyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wRbrOmS9UPSYWI1dGk/giphy.webp" alt="" className='w-[400px]'/>
                  </div>
                  <p className='text-black mt-28 text-3xl text-center'>Your cart is empty</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
