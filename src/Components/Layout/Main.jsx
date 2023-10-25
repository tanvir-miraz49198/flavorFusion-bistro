import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    console.log(location)
    const removeNavFooter = location.pathname.includes('login') ||
    location.pathname.includes('registration')
    return (
        <div>
            {removeNavFooter || <Navbar></Navbar> }
            <Outlet></Outlet>
            { removeNavFooter || <Footer></Footer> }
        </div>
    );
};

export default Main;