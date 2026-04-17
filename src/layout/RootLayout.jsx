import React from 'react';
import Homepage from '../pages/homepage/Homepage';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

            <ToastContainer position='top-center'></ToastContainer>
        </div>
    );
};

export default RootLayout;