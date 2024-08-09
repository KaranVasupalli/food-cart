import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../components/firebase";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe(); // Cleanup the subscription on unmount
    }, []);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate('/login'); // Redirect to login page after sign out
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    const signUp_page = () => {
        navigate('/signup');
    };

    const Login_page = () => {
        navigate('/login');
    };

    return (
        <>
            <nav className="flex justify-around text-3xl bg-slate-700 h-30 text-white">
                <div className="flex items-center gap-6">
                    <img className="w-14" src="./src/assets/foodDL.png" alt="" />
                    <h1>Food Delivery</h1>
                </div>
                <div className="flex items-center gap-6 cursor-pointer list-none">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/reviews'>Reviews</Link></li>
                    <li><Link to='/cartsec'>Cart</Link></li>
                </div>
                <div className="flex gap-6 items-center">
                    {user ? (
                        <div className="flex gap-4 items-center">
                            <span>Hi, {user.email}</span>
                            <button onClick={handleSignOut} className="px-4 py-2 bg-slate-500 rounded-md">Sign Out</button>
                        </div>
                    ) : (
                        <div className="flex gap-4">
                            <button onClick={Login_page} className="px-4 py-2 bg-slate-500 rounded-md">Login</button>
                            <button onClick={signUp_page} className="px-4 py-2 bg-slate-500 rounded-md">Sign Up</button>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
