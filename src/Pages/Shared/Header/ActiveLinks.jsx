/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLinks = ({ to, children, className }) => {
  return (
    <NavLink
      to={to}
      activeClassName="active"
      activeStyle={{ backgroundColor: "white" }}
      className={className}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLinks;
