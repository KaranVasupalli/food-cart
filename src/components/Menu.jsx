// src/components/Menu.js
import React, { useState } from 'react';
import { data } from '../FoodDeliveryData';
import Curosel from '../components/curosel/Curosel';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Menu = () => {
  const { addToCart } = useCart(); 
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter(post => 
    post.item_Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigate = useNavigate();
  const goToCart = ()=> {
    navigate('/cartsec')
  }

  return (
    <>
      <h1 className="text-center text-4xl mt-28">Order Something</h1>
      <div className="text-center mt-6">
        <input
          type="text"
          placeholder="Find food"
          className="border border-green-200 w-[800px] h-12 px-4 text-2xl"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <Curosel />
      <div className="flex justify-center items-center border  ">
        <div className="flex flex-wrap gap-4 justify-center w-[90%]">
          {filteredData.map((item, index) => (
            <div key={index} className="flex flex-col justify-center border p-4 w-[340px] bg-green-200 rounded-md">
              <div className="border border-black bg-green-100">
                <img src={item.image_url} alt="" className="object-contain w-[70%] mr-auto ml-auto h-[200px] pb-6" />
              </div>
              <p className="text-black text-center mt-2">{item.item_Name}</p>
              <p className="text-black text-center mt-2">${item.price}</p>
              <div className="flex justify-between">
                <button 
                  className="bg-green-300 py-2 px-4 rounded-md"
                  onClick={() => addToCart(item)}
                >
                  Add To Cart
                </button>
                <button className="bg-green-300 py-2 px-4 rounded-md" onClick={goToCart}>Go To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
