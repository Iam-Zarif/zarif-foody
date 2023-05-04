/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import LazyLoad from 'react-lazy-load';
import like from '../../assets/positive-vote.png'

const CardsItems = ({data}) => {
  const {user} = useContext(AuthContext)
    const {
      id,
      chefPicture,
      chefName,
      yearsOfExperience,
      numberOfRecipes,
      likes,
    } = data;
    
    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <LazyLoad offset={300} threshold={0.95}>
            <figure>
              <img src={chefPicture} alt="chefs" className='lg:h-96 h-full'/>
            </figure>
          </LazyLoad>
          <div className="card-body">
            <h2 className="card-title text-3xl">
              {chefName}
              <div className="badge bg-green-500 py-3">
                {yearsOfExperience} years experience
              </div>
            </h2>
            <p className="text-2xl mt-5">
              Numbers of recipes :{" "}
              <span className="text-green-800 font-bold">
                {numberOfRecipes}
              </span>{" "}
            </p>
            <div className=" ">
              <div className="badge badge-outline mt-5 text-xl py-6">
                <img src={like} alt="" />{" "}
                <span className="text-green-800 font-bold ml-2">{likes}</span>
              </div>
            </div>
            <button className="bg-green-600 hover:bg-green-700 py-2 rounded-2xl text-lg mt-14">
              {/* {user ? (
                <div>
                  <Link to={`/${id}`}>View Recipes</Link>
                </div>
              ) : (
                <div>
                  <Link to="/login">Log in to View Recipes</Link>
                </div>
              )} */}

              <Link to={`/${id}`}>View Recipes</Link>
            </button>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    );
};

export default CardsItems;