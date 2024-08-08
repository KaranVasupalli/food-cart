import { auth } from '../components/firebase';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import ReviewSec from '../components/ReviewSec';

const Reviews = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setLoading(false);
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Navbar />
            {isLoggedIn ? (
                <ReviewSec />
            ) : (
                <p>You need to log in to view and submit reviews.</p>
            )}
            <ToastContainer />
        </>
    );
}

export default Reviews;
