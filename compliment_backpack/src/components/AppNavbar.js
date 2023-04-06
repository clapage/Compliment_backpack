import React from "react";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  return (
    <nav>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};

export default AppNavbar;
