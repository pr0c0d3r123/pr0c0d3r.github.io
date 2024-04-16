//* Imports

import { NavLink } from "react-router-dom";
import Logo from "/Logo.png";

//* CSS

import "./nav.css";

const Nav = () => {
  return (
    // Putting names of routes inside "to" property so it knows which component to render
    <nav>
      <div className="links">
        <img
          src={Logo}
          alt="Logo"
          className="nav-logo"
          onClick={() => (window.location.href = "/")}
        />
        <NavLink to="products">Products</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </div>
      <div className="user">
        <NavLink to="login" className="login-btn">
          Login
        </NavLink>
        <NavLink to="signup" className="signup-btn">
          Sign up
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
