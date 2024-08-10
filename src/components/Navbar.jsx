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
            <nav className="fixed top-0 left-0 w-full z-50 flex justify-around text-3xl bg-green-200 h-24">
                <div className="flex items-center justify-center gap-6">
                    <div className="flex items-start">
                        <img className="pb-5" src="/2logo.png" alt="" />
                    </div>
                </div>
                <div className="flex items-center gap-6 cursor-pointer list-none">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/reviews'>Reviews</Link></li>
                    <li><Link to='/cartsec'>Cart</Link></li>
                    <li><Link to='/foodAi'>FoodAi</Link></li>

                </div>
                <div className="flex gap-6 items-center">
                    {user ? (
                        <div className="flex gap-4 items-center">
                            <span>Hi, {user.email}</span>
                            <button onClick={handleSignOut} className="px-4 py-2 bg-green-400 rounded-md">Sign Out</button>
                        </div>
                    ) : (
                        <div className="flex gap-4">
                            <button onClick={Login_page} className="px-4 py-2 bg-green-300 rounded-md">Login</button>
                            <button onClick={signUp_page} className="px-4 py-2 bg-green-300 rounded-md">Sign Up</button>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
