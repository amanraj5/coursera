import React from "react";
import "./Header.css";
import logo from "../assets/image/download.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" style={{ width: "200px" }} />
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
