/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import LogoName from '../Pages/Shared/Header/LogoName';
import Navbar from '../Pages/Shared/Header/Navbar';
import Home from '../Pages/Home/Home';
import Footer from '../Pages/Shared/Footer/Footer';
import Extra1 from '../Pages/Shared/Extra1/Extra1';
import { AuthContext } from '../Providers/AuthProvider';
import { Outlet } from 'react-router-dom';

import photo from "../assets/restaurant.png"

const Main = () => {
    const {loader} =useContext(AuthContext);
    if(loader){
        return (
          <div className='flex justify-center content-center items-center h-screen '>
           <img src={photo} className='shadow-2xl shadow-black rounded-full lg:w-fit w-1/2' alt="" />
          </div>
        );
    }
    return (
        <div>
           <Navbar></Navbar>
          
          <Outlet></Outlet>
         <Footer></Footer>
           
        </div>
    );
};

export default Main;