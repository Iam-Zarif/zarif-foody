/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {




    
    const [loader,setLoader] =useState(true);
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
    
  };
  const logOut = () =>{
    setLoader(true)
    return signOut(auth)
  }
  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      // console.log(loggedUser);
      setUser(loggedUser);
      setLoader(false)
    });
    return () => {
      return unsubscribe();
    };
  });
  const authInfo = {
    createUser,
    signIn,
    user,
    logOut,
    loader
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
