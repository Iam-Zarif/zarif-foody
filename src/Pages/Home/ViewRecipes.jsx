/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import LogoName from "../Shared/Header/LogoName";
import Navbar from "../Shared/Header/Navbar";
import like from '../../assets/positive-vote.png'
import ThreeRecipes from "./ThreeRecipes";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../Shared/Footer/Footer";

const ViewRecipes = () => {
  const [showButton, setShowButton] = useState(true)
  const [showButton1, setShowButton1] = useState(true)
  const [showButton3, setShowButton3] = useState(true)
  const notify = () =>{ toast("Added to favorites");}
  const handleButtonClick = () => {
    notify();
    setShowButton(false); // set showButton1 to false after it is clicked
  };
  const handleButtonClick1 = () => {
    notify();
    setShowButton1(false);
     // set showButton1 to false after it is clicked
  };
  const handleButtonClick3 = () => {
    notify();
    setShowButton3(false); // set showButton1 to false after it is clicked
  };
  const { user, loader } = useContext(AuthContext);

  const data = useLoaderData();
  console.log(data);
  const {
   
    id,
    
    chefPicture,
    ingredients1,
    ingredients2,
    ingredients3,
    recipeName1,
    recipeName2,
    recipeName3,
    cookingMethod1,
    cookingMethod2,
    cookingMethod3,
    bio,
    chefName,
    likes,
    numberOfRecipes,
    yearsOfExperience,
  } = data;
  

  return (
    <div className="">
      <LogoName></LogoName>
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
      <div className="mt-10">
        <div className=" card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={chefPicture} className="w-1/2 " alt="Album" />
          </figure>
          <div className="card-body">
            <div className="flex items-center gap-10">
              <h2 className="text-4xl font-bold">{chefName}</h2>
              <h2 className="border px-2 py-1 rounded border-green-500">
                {yearsOfExperience} years of experienced
              </h2>
            </div>
            <p className="mt-4">{bio}</p>
            <p className="text-xl">
              Numbers of recipes :{" "}
              <span className="text-green-500">{numberOfRecipes}</span>
            </p>
            <div className="">
              <div className="flex items-center gap-3">
                <div>
                  <img src={like} alt="" />
                </div>
                <div>
                  <span className="font-bold text-green-500">{likes}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-center text-2xl font-bold">Recipes</p>
      </div>
      <div className="flex justify-center gap-10 mt-16 mb-40">
        <div className="card w-96 bg-base-100 shadow-xl shadow-slate-400">
          <div className="card-body">
            <h1>
              <span className="text-2xl">recipe name</span> :{" "}
              <span className="text-2xl text-green-500">{recipeName1}</span>
            </h1>
            <p>
              <h1 className="text-center text-xl mt-2">ingredients</h1>
              <hr className="mt-2" />
              {ingredients1.map((data) => (
                <div className="mt-3">
                  <div className="text-center">{data}</div>
                </div>
              ))}
              <p className="text-center mt-10 text-xl font-bold">
                Cooking Method{" "}
              </p>
              <hr className="mt-2" />
              <div className="mt-5">
                <p>{cookingMethod1}</p>
              </div>
            </p>
            {showButton && (
              <button
                onClick={handleButtonClick}
                
                className="border py-2 rounded-lg mt-5 hover:border-green-500"
              >
                Add to Favorite
              </button>
            )}
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl shadow-slate-400">
          <div className="card-body">
            <h1>
              <span className="text-2xl">recipe name</span> :{" "}
              <span className="text-2xl text-green-500">{recipeName2}</span>
            </h1>
            <p>
              <h1 className="text-center text-xl mt-2">ingredients</h1>
              <hr className="mt-2" />
              {ingredients2.map((data) => (
                <div className="mt-3">
                  <div className="text-center">{data}</div>
                </div>
              ))}
              <p className="text-center mt-10 text-xl font-bold">
                Cooking Method{" "}
              </p>
              <hr className="mt-2" />
              <div>
                <p className="mt-4">{cookingMethod2}</p>
              </div>
            </p>
            {showButton1 && (
              <button
                onClick={handleButtonClick1}
                className="border py-2 rounded-lg mt-5 hover:border-green-500"
              >
                Add to Favorite
              </button>
            )}
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl shadow-slate-400">
          <div className="card-body">
            <h1>
              <span className="text-2xl">recipe name</span> :{" "}
              <span className="text-2xl text-green-500">{recipeName3}</span>
            </h1>
            <p>
              <h1 className="text-center text-xl mt-2">ingredients</h1>
              <hr className="mt-2" />
              {ingredients3.map((data) => (
                <div className="mt-3">
                  <div className="text-center">{data}</div>
                </div>
              ))}
              <p className="text-center mt-10 text-xl font-bold">
                Cooking Method{" "}
              </p>
              <hr className="mt-2" />
              <div>
                <p className="mt-4">{cookingMethod3}</p>
              </div>
            </p>
            {showButton3 && (
              <button
                onClick={handleButtonClick3}
                className="border py-2 rounded-lg mt-5 hover:border-green-500"
              >
                Add to Favorite
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ViewRecipes;
