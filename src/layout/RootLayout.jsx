import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div className='bg-base-200'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;