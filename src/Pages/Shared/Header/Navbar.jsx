/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import userProfile from '../../../assets/user_1.png'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user)
  const handleLogOut = () =>{
    logOut().then().catch(error => console.log(error))
  }
  return (
    <div className="mt-5">
      <div className="py-5 navbar border border-gray-500 ">
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
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/blogs" className="justify-between">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            Zarif{" "}
            <span className="text-3xl font-bold text-green-500">Foody</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="font-semibold">
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <Link to="/blogs" className="font-semibold">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="tooltip" data-tip="hello">
              <img src={userProfile} alt="" className="mr-5"/>
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
              <button className="border px-3 py-1 rounded-xl" onClick={handleLogOut}>Log out</button>
            </div>
          ) : (
            <div>
              <Link to="/register">Register</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
