import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="products">Products</NavLink>
      <NavLink to="about">About Us</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <NavLink to="login">Login</NavLink>
      <NavLink to="signup">Sign Up</NavLink>
    </nav>
  );
};

export default Nav;
