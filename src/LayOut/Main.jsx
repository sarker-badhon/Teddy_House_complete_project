import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from '../Pages/Home/Home/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;