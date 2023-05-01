/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import LogoName from './LogoName';
import Navbar from './Navbar';

const Register = () => {
    return (
      <div className="">
        <LogoName></LogoName>
        <Navbar></Navbar>

        <div className="">
          <p className="text-center text-4xl mt-10 font-bold">
            Please Register
          </p>
          <div className="">
            <form className="mt-10">
              <div className="flex flex-col items-center gap-10">
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Name"
                  className=" input input-bordered input-accent w-full max-w-xs"
                />
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

              <section className="text-center mt-8">
                <button className="btn btn-success hover:bg-green-700">
                  Register
                </button>
              </section>
              <p className="text-center mt-10">
                <span className="text-xl font-semibold">
                  Already have an account ?
                </span>{" "}
                <span>
                  <Link
                    to="/login"
                    className="btn bg-green-500 hover:bg-green-700"
                  >
                    Log in
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;