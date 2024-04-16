//* Imports

import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import API from "../../../../Handler/API";

// * Images

import Eye from "./icons/eye.png";
import EyeCrossed from "./icons/eye_crossed.png";

const SignUp = () => {
  // Both states are used for password show/hide mechanism

  const [eye, setEye] = useState(false);
  const [showPasswd, setShowPasswd] = useState("password");

  const user = useRef({
    // useRef stores values from input fields in it's predefined object
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handlePost = async (e) => {
    // Asynchronous function for posting data from "user" reference
    const api = new API(); // Initializing API object

    e.preventDefault(); // Prevents default behavior of form
    await api.postUserData(user.current); // Post data from "user" reference using function from API

    window.location.href = "/login"; // After successful login, user is being redirected to the login page
  };

  return (
    <form className="register-page">
      <label htmlFor="fname">
        First Name
        <input
          type="text"
          name="fname"
          onChange={(e) => (user.current.fname = e.target.value)} // Storing the value of the input field into "user" object (same for other fields)
        />
      </label>

      <label htmlFor="lname">
        Last Name
        <input
          type="text"
          name="lname"
          onChange={(e) => (user.current.lname = e.target.value)}
        />
      </label>

      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          onChange={(e) => (user.current.email = e.target.value)}
        />
      </label>

      <label htmlFor="passwd">
        Password
        <input
          type={showPasswd}
          name="passwd"
          id="showPasswd"
          onChange={(e) => (user.current.password = e.target.value)}
        />
        <img
          src={EyeCrossed}
          className="form-eye"
          onClick={(e) => {
            setEye(!eye); // Setting state to true (showing plain password)
            e.target.src = eye ? EyeCrossed : Eye; // If state is true, display crossed eye, if false, display normal eye
            setShowPasswd(eye ? "password" : "text"); // If state is true, password is displayed as plain text, if false password is hidden
          }}
        />
      </label>

      <input
        type="submit"
        value="Sign up"
        className="btn"
        onClick={handlePost} // Calling "handlePost" function after clicking on button
      />

      <p className="signin-switch">
        Already have an account? <NavLink to="../login">Login</NavLink>
      </p>
    </form>
  );
};

export default SignUp;
