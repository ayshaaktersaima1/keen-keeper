import React from 'react';
import Homepage from '../pages/homepage/Homepage';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;