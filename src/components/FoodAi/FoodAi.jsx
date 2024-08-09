import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import './FoodAi.css';
import Navbar from '../Navbar';

const FoodAi = () => {
  const [prompt, setPrompt] = useState('');
  const [responseText, setResponseText] = useState('');

  const API_KEY = "AIzaSyBjRmNFFBrDbyJBVs989ILCOqcKI81HCS4";
  const genAI = new GoogleGenerativeAI(API_KEY);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSearch = async () => {
    console.log(prompt);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    console.log(text);

    let plainText = text
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1");

    setResponseText(plainText);
  };

  return (
    <>
    <Navbar />
    <div className='bg-green-100'>
      <header>
        <h1>Hello user</h1>
        <h2>How can I help you today?</h2>
      </header>
      <main>
        <div className="msg-main">
          <div className="msg-container">
            <div className="user-msg text-black">User: Hello</div>
            <div className="bot-msg">
              Gemini: Hello, How can I assist you?
            </div>
            <div className="middleContainer">
              <pre>{responseText}</pre>
            </div>
          </div>
        </div>
        <div className="userinput-main">
          <div className="user-input-div">
            <input
              type="text"
              placeholder="Enter a prompt here"
              className="user-input"
              value={prompt}
              onChange={handlePromptChange}
            />
            <button className="btn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default FoodAi;
