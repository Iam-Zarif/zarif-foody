/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import userProfile from '../../../assets/user_1.png'
import ActiveLinks from "./ActiveLinks";
import { updateProfile } from "firebase/auth";
import NavContainer from "../../../Container/NavContainer";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const notify = () => toast.success('Successfully logged out');


  
  const handleLogOut = () => {
    logOut()
  
      .then(
        {
        }
      )
      .catch((error) => console.log(error));
  };
  return (
    <div className="shadow-md shadow-black">
      <div><Toaster/></div>
      <NavContainer>
      <div className="mt-5">
      <div className="py-5 navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <ActiveLinks to="/">Home</ActiveLinks>
              </li>
              <li tabIndex={0}>
                <ActiveLinks to="/blogs" className="justify-between">
                  Blog
                </ActiveLinks>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Zarif{" "}
            <span className="text-3xl font-bold text-green-500">Foody</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ActiveLinks to="/" className="font-semibold">
                Home
              </ActiveLinks>
            </li>
            <li tabIndex={0}>
              <ActiveLinks to="/blogs" className="font-semibold">
                Blog
              </ActiveLinks>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-5 lg:gap-2">
            {user ? (
              <div className="tooltip" data-tip={user.displayName}>
                <img src={user.photoURL} alt="image" className="mr-5 w-10 rounded-full" />
              </div>
            ) : (
              <div>
                <Link
                  to="/login"
                  className="btn bg-green-500 text-white hover:bg-green-700"
                >
                  Log in
                </Link>
              </div>
            )}
            {user ? (
              <div>
                <button
                  className="border text-lg font-bold hover:border-green-500 px-4 py-2 rounded-xl"
                  onClick={handleLogOut}
                >
                  Log out
                </button>
              </div>
            ) : (
              <div>
                <Link
                  to="/register"
                  className="bg-green-500 p-3 rounded-xl text-black font-semibold"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </NavContainer>
    </div>
  );
};

export default Navbar;
