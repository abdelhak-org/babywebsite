// Navbar.js
import React, { useEffect, useState } from "react";
import "./Navbar.css";

import Logo from "../components/Logo";
import ListItems from "./ListItems";
import Menu from "../components/Menu";
import Control from "../components/Control";

const Navbar = ({ currentUser }) => {
  const [showNav, setShowNav] = useState(true);
  const menuItems = ["Home", "About", "Articles", "Gallery", "Shop"];

  useEffect(() => {
  }, [showNav]);

  const navbarClasses = [
    "navbar-container",
    "bg-primary",
    showNav ? "show" : "",
  ].join(" ");

  return (
    <>
      {showNav && (
        <div className={navbarClasses}>
          <Logo />

      
          <ListItems list={menuItems} />

        

          <Control currentUser={currentUser} />
        </div>
      )}

      <Menu setShowNav={setShowNav} showNav={showNav} />
    </>
  );
};

export default Navbar;

