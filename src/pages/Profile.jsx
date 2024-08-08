import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, db } from '../components/firebase';
import Navbar from '../components/Navbar'

const Profile = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const fetchUserData = async (user) => {
        try {
            const docRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
                console.log(docSnap.data());
            } else {
                console.log('No such document!');
                toast.error('No such document found!');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            toast.error('Failed to fetch user data');
        }
        setLoading(false);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                setIsLoggedIn(true);
                await fetchUserData(user);
            } else {
                console.log('User is not logged in');
                setIsLoggedIn(false);
                setLoading(false);
            }
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                setUserDetails(null);
                setIsLoggedIn(false);
                toast.success('Logged out successfully');
                window.location.href="./"
            })
            .catch((error) => {
                console.error('Error signing out:', error);
                toast.error('Error signing out');
            });
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Navbar />
            {isLoggedIn && userDetails ? (
                <>
                    <h3>Welcome, {userDetails.fullname}</h3>
                    <p>Email: {userDetails.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <p>User not logged in</p>
            )}
            <ToastContainer />
        </div>
    );
};

export default Profile;
