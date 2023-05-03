/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Shared/Header/Login";
import Register from "../Pages/Shared/Header/Register";
import Blogs from "../Pages/Shared/Blogs/Blogs";
import ViewRecipes from "../Pages/Home/ViewRecipes";
import PrivateRoute from "./PrivateRoute";
import Four0Four from "../Four0Four/Four0Four";
import Extra1 from "../Pages/Shared/Extra1/Extra1";

const router = createBrowserRouter([



  
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/", element: <Extra1></Extra1> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/blogs", element: <Blogs></Blogs> },
      { path: "*", element: <Four0Four></Four0Four> },
    ],
  },
  { path: "*", element: <Four0Four></Four0Four> },
  {
    path: "/:id",
    element: (
      <PrivateRoute>
        <ViewRecipes></ViewRecipes>
      </PrivateRoute>
    ),

    loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
  },
]);

export default router;
