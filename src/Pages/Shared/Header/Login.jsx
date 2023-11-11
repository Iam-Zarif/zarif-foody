/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import LogoName from './LogoName';
import Navbar from './Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { ToastContainer, toast } from "react-toastify";
import github from '../../../assets/github _1.png'
import google from '../../../assets/google (1).png'
import app from '../../../Firebase/firebase.config';
import { GoogleAuthProvider, getAuth, signInWithPopup , GithubAuthProvider} from 'firebase/auth';
import { Toaster } from 'react-hot-toast';

const Login = () => {
  const location = useLocation()

  const from = location.state?.from?.pathname || "/";
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const githubSignIn =() =>{
    signInWithPopup(auth,gitProvider)
    .then(result =>{
      
      const loggedUser = result.user;
      navigate(from, {replace: true})
      console.log(loggedUser);
    }).catch(error => {console.log(error)})
  }
  const handelGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();
  const {signIn} =useContext(AuthContext);
  const handleLogIn =(e)=>{
     const notify = () => toast("Successfully Logged in");
     const errorNotify = () => toast("Wrong password / email !!!");
    e.preventDefault();
    const form = e.target;
    
    const email = form.email.value;
    const password = form.password.value;
 
    // console.log( email, password);
    signIn(email,password).then(result =>{
      notify();
      const signedInUser = result.user;
      // console.log(signedInUser);
      form.reset();
      
      navigate(from, { replace: true });
    }).catch(error =>{
      console.log(error)
      errorNotify();
    })
  }
    return (
      <div className="mb-20">
        <div><Toaster/></div>
        <ToastContainer />
        <div className="">
          <p className="text-center text-4xl mt-10 font-bold">Please Login</p>
          <div className="">
            <form onSubmit={handleLogIn} className="mt-10">
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
        <div className="mt-5 flex justify-center items-center gap-5">
          <div>
            <hr className="w-20 lg:w-96" />
          </div>
          <div>
            <p className="text-center text-2xl">or</p>
          </div>
          <div>
            <hr className="w-20 lg:w-96" />
          </div>
        </div>
        <div></div>

        <div className="flex flex-col lg:flex-row lg:p-0 px-12 justify-center gap-16 mt-10">
          <div className="border  px-5 py-2 bg-slate-700 rounded-xl ">
            <Link onClick={githubSignIn} className="flex items-center gap-2">
              <img src={github} alt="" />
              <p>Log in With github</p>
            </Link>
          </div>
          <div className="border  px-5 py-2 bg-slate-700 rounded-xl ">
            <Link
              onClick={handelGoogleSignIn}
              className="flex items-center gap-2"
            >
              <img src={google} alt="" />
              <p>Log in With google</p>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Login;