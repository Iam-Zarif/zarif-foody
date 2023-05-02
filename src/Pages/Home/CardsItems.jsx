/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const CardsItems = ({data}) => {
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
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={chefPicture} alt="chefs" />
          </figure>
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
              <div className="badge badge-outline mt-5 text-xl p-5">
                Likes :{" "}
                <span className="text-green-800 font-bold">{likes}</span>
              </div>
            </div>
            <button className="bg-green-600 hover:bg-green-700 py-2 rounded-2xl text-lg mt-14">
              <Link>View Recipes</Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default CardsItems;