import React, { useState } from "react";
import "./nav.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showmenu, setshowmenu] = useState(false);

  const menuHandeler = () => {
    setshowmenu(!showmenu);
  };

  return (
    <div>
      <nav>
        <img src={logo} alt="Logo" />

        <div className={`nav-list ${showmenu ? "menu-mob" : "menu-web"}`}>
          <Link className="nav-a" to="/">
            <b>Home</b>
          </Link>
          <Link className="nav-a" to="/tour">
            <b>Tours</b>
          </Link>
          <Link className="nav-a" to="/about">
            <b>About</b>
          </Link>
          <Link className="nav-a" to="/contact">
            <b>Contact</b>
          </Link>
        </div>

        {/* ✅ WhatsApp Enquiry Button */}
        

        {/* Mobile Menu Button */}
        <button onClick={menuHandeler} className="menu-btn">
           
          <i className="nav-menu-icon ri-menu-5-line" ></i>
         
        </button>
      </nav>
    </div>
  );
};

export default Nav;
