/* eslint-disable no-unused-vars */
import React from 'react';
import LogoName from '../Pages/Shared/Header/LogoName';
import Navbar from '../Pages/Shared/Header/Navbar';
import Home from '../Pages/Home/Home';
import Footer from '../Pages/Shared/Footer/Footer';



const Main = () => {
    return (
        <div>
           <LogoName></LogoName>
           <Navbar></Navbar>
           <Home></Home>
           <Footer></Footer>
        </div>
    );
};

export default Main;