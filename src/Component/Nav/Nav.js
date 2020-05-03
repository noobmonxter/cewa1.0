import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import logo from "../../Assets/image/pp.jpeg";
const Nav = () => {
  return (
    <div className="Nav">
      <div className="Nav-title">
        <Link to="./">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="Nav-li">
        <Link to="./about">
          <li>About us</li>
        </Link>
        <Link to="./Programs">
          <li>Our Program</li>
        </Link>
        <Link to="./gallery">
          <li>Gallery</li>
        </Link>
        <a href="https://forms.gle/nhC3RKXS1Vqf7Jhq9">
          <li>For Members</li>
        </a>
        <Link to="./contacts">
          <li>Contact Us</li>
        </Link>
      </div>
      <div className="Nav-search">
        <input type="text" placeholder="Search"></input>
      </div>
    </div>
  );
};
export default Nav;
