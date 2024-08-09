import React, { useEffect, useState } from 'react';
import { auth } from '../components/firebase';
import Navbar from '../components/Navbar';
import ReviewSec from '../components/ReviewSec';

const Reviews = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState(''); // Add a state for username

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
                setUsername(user.displayName || user.email); // Set username (use displayName or email)
            } else {
                setIsLoggedIn(false);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Navbar />
            <ReviewSec username={username} isLoggedIn={isLoggedIn} />
        </>
    );
}

export default Reviews;
