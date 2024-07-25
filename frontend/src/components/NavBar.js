import React from "react";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="flex">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Category</li>
      </ul>
      <div>
        <input className="border"></input>
      </div>
      <div>
        <button>
          Login/Signup
        </button>
      </div>
    </div>
  );
};

export default NavBar;
