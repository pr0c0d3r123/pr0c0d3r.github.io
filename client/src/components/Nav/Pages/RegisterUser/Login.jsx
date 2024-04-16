//* Imports

import { NavLink } from "react-router-dom";
import { useState } from "react";

//* Images

import Eye from "./icons/eye.png";
import EyeCrossed from "./icons/eye_crossed.png";

//* CSS

import "./register.css";

const Login = () => {
  // Both useState hooks are used for show/hide mechanism. First is for changing the image, and second is for changing type of input element
  const [eye, setEye] = useState(false); // Changing image on click
  const [showPasswd, setShowPasswd] = useState("password"); // Changing input type of element (default is "password")

  return (
    //* Login page is not implemented yet, it takes a lot more time to do because of complexity (passwords are stored as hashes, so it needs to first hash password from login page and then check if hash matches the one stored in database)
    <div className="center">
      <h1>Login is currently unavailable</h1>
      <form className="register-page">
        <label htmlFor="Email">
          Email
          <input type="email" name="Email" />
        </label>

        <label htmlFor="Passwd">
          Password
          <input type={showPasswd} name="Passwd" className="passwd" />
          <img
            src={EyeCrossed} // Setting default value of useState hook
            className="form-eye"
            onClick={(e) => {
              setEye(!eye); // Setting value of hook to true
              e.target.src = eye ? Eye : EyeCrossed; // After change, "src" property is set according to the value of hook
              setShowPasswd(eye ? "password" : "text"); // If "eye" is true, then put type of input element to be "password", if it's false then put type of input element to be "text"
            }}
          />
        </label>

        <input type="submit" value="Login" className="btn" />

        <p className="signin-switch">
          New here? <NavLink to="../signup">Sign Up</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
