import React from 'react';
import Home from '../pages/Home/Home/Home';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Second from '../pages/Home/Second/Second';
import Third from '../pages/Home/Third/Third';
import Fourth from '../pages/Home/Fourth/Fourth';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <Second></Second>
            <Third></Third>
            <Fourth></Fourth>
        </div>
    );
};

export default Main;