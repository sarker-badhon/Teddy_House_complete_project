import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../Provider/AuthProvider';
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handlerLogOut = () => {
        logOut()
            .then((result) => {
                const logOutUser = result.user;
                console.log(logOutUser);
            })
            .catch((error) => {
                console.log(error);
            })
    }




    const navListItems = <>

        <li> <Link  className='text-xl text-white' to="/">Home</Link> </li>
        <li> <Link  className='text-xl text-white' to="/allToys"> All Toys</Link> </li>

        <li> <Link  className='text-xl text-white' to="/blogs">Blogs</Link> </li>
        {
            user &&
            <>
                <li> <Link  className='text-xl text-white' to="/myToys">My Toys</Link> </li>
                <li> <Link  className='text-xl text-white' to="/addToy">Add A Toy</Link> </li>
            </>
        }
        {user ? <>

             <img className="w-10 rounded-full" src={user.photoURL} title={user?.displayName} alt={user.displayName} />
            <li><Link  className='text-xl text-white' onClick={handlerLogOut} to="">Log Out</Link></li>

        </> :
          
                <li><Link  className='text-xl text-white' to="/login">Login</Link></li>
        
        }
    </>



    return (
        <div className="navbar bg-blue-600 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navListItems}
                    </ul>
                </div>
                <Link className='md:flex items-center' to="/">
                    <img className='w-14 h-14 rounded' src="https://i.ibb.co/xhBwdnm/images.png" alt="" />
                    <h2 className='text-3xl font-bold text-white ml-2'>Teddy House</h2>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navListItems}
                </ul>
            </div>
            <div className="w-10 rounded-full ml-3 " >
            </div>
        </div>
    );
};

export default NavBar;
