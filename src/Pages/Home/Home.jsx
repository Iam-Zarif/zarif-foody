/* eslint-disable no-unused-vars */
import React from 'react';
import CoverPhoto from '../Shared/Header/CoverPhoto';
import Cards from './Cards';
import Extra1 from '../Shared/Extra1/Extra1';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <CoverPhoto></CoverPhoto>
            <Cards></Cards>
            <Extra1></Extra1>
            <Testimonials/>
        </div>
    );
};

export default Home;