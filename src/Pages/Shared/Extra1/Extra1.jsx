/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import img1 from '../../../assets/fresh_1.png'
import img2 from '../../../assets/chef.png'
import img3 from '../../../assets/dish.png'
import img4 from '../../../assets/distribution.png'
import { Link } from 'react-router-dom';
import Extra2 from './Extra2';
const Extra1 = () => {
    
    return (
      <div className='mt-40'>
        <hr className='w-1/3 mx-auto'/>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-28 mt-28">
          <div className="flex flex-col items-center content-center">
            <img src={img1} alt="" />
            <p className="text-3xl font-bold text-green-500">Fresh food</p>
            <hr className="w-44 mt-3" />
            <p className="mt-5 font-bold text-center px-4 lg:px-0">
              We use only best ingredients to cook the tasty food for you{" "}
            </p>
          </div>
          <div className="flex flex-col items-center content-center">
            <img src={img2} alt="" />
            <p className="text-3xl font-bold text-green-500">
              Experienced Chefs
            </p>
            <hr className="w-44 mt-3" />
            <p className="mt-5 font-bold text-center px-4 lg:px-0">
              Our stuffs consists of chefs and cooks with of Experience
            </p>
          </div>
          <div className="flex flex-col items-center content-center">
            <img src={img3} alt="" />
            <p className="text-3xl font-bold text-green-500">
              A variety of dishes{" "}
            </p>
            <hr className="w-44 mt-3" />
            <p className="mt-5 font-bold text-center px-4 lg:px-0">
              In our menu you'll a wide variety of dishes, desserts and drinks
            </p>
          </div>
          <div className="flex flex-col items-center content-center">
            <img src={img4} alt="" />
            <p className="text-3xl font-bold text-green-500">Fast delivery</p>
            <hr className="w-44 mt-3" />
            <p className="mt-5 font-bold text-center px-4 lg:px-0">
              Everything you order will be place to your home within 24 hours
            </p>
          </div>

          {/*  */}
        </div>
        <Extra2></Extra2>
      </div>
    );
};

export default Extra1;