import React from 'react';
import Homepage from '../pages/homepage/Homepage';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from '../shared/ScrollToTop';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ScrollToTop></ScrollToTop>
            <Outlet></Outlet>
            <Footer></Footer>

            <ToastContainer position='top-center'></ToastContainer>
        </div>
    );
};

export default RootLayout;