import { Link, useNavigate } from "react-router-dom"

const Navbar = ()=> {

    const navigate = useNavigate();

    const signUp_page = ()=> {
        navigate('/signup')
    }

    const Login_page = ()=> {
        navigate('/login')
    }

    
    return(
        <>
            <nav className=" flex justify-around text-3xl bg-slate-700 h-20 text-white">
                <div className=" flex items-center gap-6">
                    <img className=" w-14" src=".\src\assets\foodDL.png" alt="" />
                    <h1>Food Delivery</h1>
                </div>
                <div className=" flex items-center gap-6 cursor-pointer list-none">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/reviews'>Reviews</Link></li>
                    <li><Link to='/cartsec'>Cart</Link></li>
                </div>
                <div className=" flex gap-6 items-center ">
                    <div className=" flex gap-4">
                        <button onClick={Login_page} className=" px-4 py-2 bg-slate-500 rounded-md">Login in</button>   
                        <button onClick={signUp_page} className=" px-4 py-2 bg-slate-500 rounded-md">Sign up</button> 
                    </div>
                    
                </div>
            </nav>
        </>
    )
}
export default Navbar