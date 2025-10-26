import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import glazyDaysLogo from "../assets/glazyDayslogo.png";
import "../styles/Nav.css";

function Navigation() { 
  return (
    <nav className="navigation">
      <div className="nav-left">
        <img src={glazyDaysLogo} alt="Glazy Days Logo" className="logo-img" />
        <h2 className="logo-text">Glazy Days</h2>
      </div>

      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/cart"><FaShoppingCart size={22} /></NavLink></li>
        <li><NavLink to="/profile"><FaUserCircle size={22} /></NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
