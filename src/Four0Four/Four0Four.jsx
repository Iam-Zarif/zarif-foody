/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import img from '../assets/404.png'

const Four0Four = () => {
    return (
      <div className='mt-24'>
        <img className="mx-auto" src={img} alt="" />
        <p className='text-center mt-5'>We are working on it</p>
        <p className='text-center mt-5'>Or Go to <Link className='border p-1 rounded-xl' to='/'>Home</Link></p>
      </div>
    );
};

export default Four0Four;