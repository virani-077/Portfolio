import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../images/logo2.jpg";

const Header = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className={color ? "navbar navbar-bg" : "navbar"}>
        <div className="logo">
          <Link to="/" className="logo-text">
            <h1 className="header-heading">
              <img src={Logo} alt="" className="w-60 mt-2" />
            </h1>
          </Link>
        </div>
        <div className="nav-menu">
          <ul className={click ? "nav-flex active" : "nav-flex"}>
            <li>
              <Link to="/" className="menu ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="menu">
                About
              </Link>
            </li>
            <li>
              <Link to="/Service" className="menu">
                Service
              </Link>
            </li>

            <li>
              <Link to="/contect" className="menu">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </div>
    </>
  );
};

export default Header;
