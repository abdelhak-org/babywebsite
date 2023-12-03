import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ title }) => {
  return (
    <Link to={title} className="block md:inline-block px-4 py-2   text-xl text-center  font-sans tracking-wider
   ">
      <li>{title}</li>
    </Link>
  );
};

export default NavLink;
