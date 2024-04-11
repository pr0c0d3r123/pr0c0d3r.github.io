// TODO FIX SIGN UP FORM
// TODO YOU NEED TO MAKE POST FORM SO THAT YOU SEND PARAMETERS INSIDE OF URL

import { NavLink } from "react-router-dom";
//import axios from "axios";
//import { useState } from "react";

const Form = () => {
  //  const [user, setUser] = useState(null);

  return (
    <form className="register-page">
      <label htmlFor="fname">
        First Name
        <input type="text" name="fname" />
      </label>

      <label htmlFor="lname">
        Last Name
        <input type="text" name="lname" />
      </label>

      <label htmlFor="email">
        Email
        <input type="email" name="email" />
      </label>

      <label htmlFor="passwd">
        Password
        <input type="password" name="passwd" />
      </label>

      <input type="submit" value="Sign up" className="btn" />

      <p className="signin-switch">
        Already have an account? <NavLink to="../login">Login</NavLink>
      </p>
    </form>
  );
};

export default Form;
