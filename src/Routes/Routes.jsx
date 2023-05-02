/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Shared/Header/Login';
import Register from '../Pages/Shared/Header/Register';
import Blogs from '../Pages/Shared/Blogs/Blogs';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {path:'/' , element:<Home></Home>}
    ]
  },
  {path:'/login' , element:<Login></Login>},
  {path:'/register' , element:<Register></Register>},
  {path:'/blogs' , element:<Blogs></Blogs>}
]);

export default router;