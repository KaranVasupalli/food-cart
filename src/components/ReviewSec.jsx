import React, { useState } from 'react';
import Accordian from './Accordian/Accordian';
import C_Reviews from './customerReviews/C_Reviews';

const ReviewSec = () => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');

    const handleInputChange = (e) => {
        setNewReview(e.target.value);
    };

    const handleAddReview = () => {
        if (newReview.trim()) {
            setReviews([...reviews, newReview]);
            setNewReview('');
        }
    };

    return (
        <>
            <div className="review-section">
            <h1 className='text-center text-5xl'>Reviews</h1>
            <div className="add-review">
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
            </div>
            <div className="reviews mt-4">
                {reviews.length === 0 ? (
                    <p className="text-center"></p>
                ) : (
                    reviews.map((review, index) => (
                        <div key={index} className="review border p-2 mt-2">
                            {review}
                        </div>
                    ))
                )}
            </div>
        </div>
        <div>
            <C_Reviews />
        </div>
        <div>
            <Accordian />
        </div>
        </>
        
    );
}

export default ReviewSec;
