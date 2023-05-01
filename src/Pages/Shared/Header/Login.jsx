/* eslint-disable no-unused-vars */
import React from 'react';
import LogoName from './LogoName';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className="">
        <LogoName></LogoName>
        <Navbar></Navbar>

        <div className="">
          <p className="text-center text-4xl mt-10 font-bold">Please Login</p>
          <div className="">
            <form className="mt-10">
              <div className="flex flex-col items-center gap-10">
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="email"
                  className=" input input-bordered input-accent w-full max-w-xs"
                />
                <input
                  required
                  name="password"
                  type="password"
                  placeholder="password"
                  className=" input input-bordered input-accent w-full max-w-xs"
                />
              </div>
              <p className="mt-2 text-center">
                Forgot Password? <span className="btn">Click here</span>
              </p>
              <section className="text-center mt-8">
                <button className="btn btn-success hover:bg-green-700">
                  Log in
                </button>
              </section>
              <p className="text-center mt-10">
                <span className="text-xl font-semibold">
                  New to Zarif{" "}
                  <span className="text-green-600 text-3xl font-bold">
                    Foody
                  </span>
                  ?
                </span>{" "}
                <span>
                  <Link
                    to="/register"
                    className="btn bg-green-500 hover:bg-green-700"
                  >
                    Register
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;