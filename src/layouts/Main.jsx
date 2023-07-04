import React from 'react';

import Home from '../pages/Home/Home/Home';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Second from '../pages/Home/Second/Second';
import Third from '../pages/Home/Third/Third';
import Fourth from '../pages/Home/Fourth/Fourth';
import Fifth from '../pages/Home/Fifth/Fifth';
import LogoSection from '../pages/LogoSection/LogoSection';
import Footer from '../pages/Shared/Footer/Footer';
import './Main.css';
import bgimg from "../assets/bg-color.png"

const Main = () => {
    return (
        <div style={{
            // borderRadius: "0 0 1668px 1668px",
            // background: "linear-gradient(142deg, rgba(61, 136, 245, 0.08) 0%, rgba(217, 217, 217, 0) 100%)",
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }} >
            {/* <Navbar></Navbar> */}
            <Home></Home>  
            {/* <Second></Second>  */}
            {/* <Third></Third>
            <Fourth></Fourth>
            <Fifth></Fifth>
            <LogoSection></LogoSection>
            <Footer></Footer>  */}
        </div>
    );
};

export default Main;