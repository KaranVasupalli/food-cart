// src/components/Menu.js
import React, { useState } from 'react';
import { data } from '../FoodDeliveryData';
import Curosel from '../components/curosel/Curosel';
import { useCart } from '../CartContext'; // Adjust the import path

const Menu = () => {
  const { addToCart } = useCart(); // Access addToCart from context
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter(post => 
    post.item_Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1 className="text-center text-3xl mt-8">Order Something</h1>
      <div className="text-center mt-6">
        <input
          type="text"
          placeholder="Find food"
          className="border border-blue-200 w-[400px] h-12 px-4 text-2xl"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <Curosel />
      <div className="flex justify-center items-center border border-black">
        <div className="flex flex-wrap gap-4 justify-center w-[90%]">
          {filteredData.map((item, index) => (
            <div key={index} className="flex flex-col justify-center border-black border p-4 w-[340px]">
              <div className="border border-black">
                <img src={item.image_url} alt="" className="object-contain w-[70%] mr-auto ml-auto h-[200px] pb-6" />
              </div>
              <p className="text-black text-center mt-2">{item.item_Name}</p>
              <p className="text-black text-center mt-2">${item.price}</p>
              <div className="flex justify-between">
                <button 
                  className="bg-red-300 py-2 px-4 rounded-md"
                  onClick={() => addToCart(item)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
