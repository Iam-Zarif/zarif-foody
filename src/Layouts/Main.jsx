/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import LogoName from '../Pages/Shared/Header/LogoName';
import Navbar from '../Pages/Shared/Header/Navbar';
import Home from '../Pages/Home/Home';
import Footer from '../Pages/Shared/Footer/Footer';
import Extra1 from '../Pages/Shared/Extra1/Extra1';
import { AuthContext } from '../Providers/AuthProvider';



const Main = () => {
    let {loader} =useContext(AuthContext);
    if(loader){
        return (
          <div
            className="radial-progress text-primary mt-64 ml-44 lg:ml-96"
            style={{ "--value": 70 }}
          >
            70%
          </div>
        );
    }
    return (
        <div>
           <LogoName></LogoName>
           <Navbar></Navbar>
           <Home></Home>
          <Extra1></Extra1>
           <Footer></Footer>
        </div>
    );
};

export default Main;