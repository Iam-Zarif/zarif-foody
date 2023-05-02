/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import LogoName from '../Shared/Header/LogoName';
import Navbar from '../Shared/Header/Navbar';

const ViewRecipes = () => {
    const {user,loader} = useContext(AuthContext);
    
    const data = useLoaderData()
    const { id, bio, chefName, likes, numberOfRecipes, yearsOfExperience } =
      data;
    console.log(data);
    if(loader){
        return (
          <div
            className="radial-progress text-primary"
            style={{ "--value": 70 }}
          >
            70%
          </div>
        );
    }
    return (
        <div>
            <LogoName></LogoName>
            <Navbar></Navbar>
            <h1>{bio}</h1>
        </div>
    );
};

export default ViewRecipes;