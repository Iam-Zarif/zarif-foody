/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LogoName from './LogoName';
import Navbar from './Navbar';
import { AuthContext } from '../../../Providers/AuthProvider';

import { ToastContainer, toast } from "react-toastify";



const Register = () => {
  const { createUser } = useContext(AuthContext);
    const handleRegister =(e)=>{
      const notify = () => toast("Successfully Registered");
           const errorNotifySixCharacter = () =>
             toast("Password should contain at least more than 6 characters");

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
         if (password.length < 6) {
           errorNotifySixCharacter();
         }
        console.log(name,email,password,photo);
        createUser(email,password).then(result =>{
          const createdUser = result.user;
          console.log(createdUser);
          form.reset();
          notify();
        }).catch(error =>{
          console.log(error)
        })
    }
    return (
      <div className="">
        

        <div className="">
          <p className="text-center text-4xl mt-10 font-bold">
            Please Register
          </p>
          <div className="">
            <form onSubmit={handleRegister} className="mt-10">
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
                <input
                  required
                  name="photo"
                  type="text"
                  placeholder="Photo url"
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
        <ToastContainer/>
      </div>
    );
};

export default Register;