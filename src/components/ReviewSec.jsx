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
        <h1 className="text-center text-5xl">Reviews</h1>
        <div className="add-review">
          {isLoggedIn ? (
            <>
              <p>
                <strong>Username:</strong> {username}
              </p>
              <textarea
                className="border p-2 w-full"
                value={newReview}
                onChange={handleInputChange}
                placeholder="Write your review here..."
              />
              <button
                className="mt-2 p-2 bg-slate-500 rounded-md text-white"
                onClick={handleAddReview}
              >
                Add Review
              </button>
            </>
          ) : (
            <p className="text-center text-red-500">
              Please log in to write a review.
            </p>
          )}
        </div>
        <div className="reviews mt-4">
          {reviews.length === 0 ? (
            <p className="text-center">No reviews yet.</p>
          ) : (
            reviews.map((review, index) => (
              <div className=" w-full flex justify-center">
                <div
                  key={index}
                  className="review border flex flex-col w-[700px] pt-3"
                >
                  <p className=" border border-slate-400 bg-slate-500 px-2 text-2xl text-red-300">
                    {review.username}
                  </p>
                  <p className=" border border-slate-400 bg-slate-200 px-3">
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
