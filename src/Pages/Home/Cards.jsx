/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CardsItems from './CardsItems';
import PrivateRoute from '../../Routes/PrivateRoute';
import LazyLoad from "react-lazy-load";

const Cards = () => {
    const [homeCards, setHomeCards] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:5000/homeCard")
        .then(res => res.json())
        .then(data =>setHomeCards(data))
        .catch(error => console.error(error))
    })
    return (
      <div className='mt-28'>
        <div>
          <p className='text-center text-4xl font-bold'>Our honorables</p>
          <hr className='w-96 mx-auto mt-2'/>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 mt-20">
          {homeCards.map((data) => (
            <CardsItems key={data.id} data={data}></CardsItems>
          ))}
        </div>
      </div>
    );
};

export default Cards;