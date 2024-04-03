import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="products">Products</NavLink>
        <NavLink to="about">About Us</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </div>

      <div className="user">
        <NavLink to="signup" className="signup-btn">
          Sign Up
        </NavLink>
        <NavLink to="login" className="login-btn">
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
