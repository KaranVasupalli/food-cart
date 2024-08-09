import React, { useState } from "react";
import Accordian from "./Accordian/Accordian";
import C_Reviews from "./customerReviews/C_Reviews";

const ReviewSec = ({ username, isLoggedIn }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  const handleInputChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleAddReview = () => {
    if (newReview.trim()) {
      const reviewWithUsername = {
        username: username || "Anonymous", // If no username is provided
        content: newReview,
      };
      setReviews([...reviews, reviewWithUsername]);
      setNewReview("");
    }
  };

  return (
    <>
      <div className="review-section">
        <h1 className="text-center text-5xl mt-28 mb-8">Reviews</h1>
        <div className=" flex justify-center">
        <div className="add-review flex flex-col w-[900px] gap-5">
          {isLoggedIn ? (
            <>
              <p className="flex gap-2 text-xl">
                <strong>Username:</strong> {username}
              </p>
              <textarea
                className="border p-2 w-full"
                value={newReview}
                onChange={handleInputChange}
                placeholder="Write your review here..."
              />
              <button
                className="mt-2 p-2 bg-green-400 rounded-md text-white"
                onClick={handleAddReview}
              >
                Add Review
              </button>
            </>
          ) : (
            <p className="text-center text-red-500 mt-5">
              Please log in to write a review.
            </p>
          )}
        </div>
        </div>
        <div className="reviews mt-4">
          {reviews.length === 0 ? (
            <p className="text-center"></p>
          ) : (
            reviews.map((review, index) => (
              <div className=" w-full flex justify-center">
                <div
                  key={index}
                  className="review border flex flex-col w-[800px] pt-3"
                >
                  <p className=" border border-green-400 bg-green-300 px-2 text-2xl 
                  flex">
                    {review.username}
                  </p>
                  <p className=" flex border border-green-400 bg-green-200 px-3">
                    {review.content}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div>
        <C_Reviews /> {/* This can include manually added reviews */}
      </div>
      <div>
        <Accordian /> {/* This is always visible */}
      </div>
    </>
  );
};

export default ReviewSec;
