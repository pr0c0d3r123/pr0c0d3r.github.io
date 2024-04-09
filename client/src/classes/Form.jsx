// TODO FIX SIGN UP FORM
// TODO YOU NEED TO MAKE POST FORM SO THAT YOU SEND PARAMETERS INSIDE OF URL

import { NavLink } from "react-router-dom";
//import axios from "axios";
//import { useState } from "react";

const Form = () => {
  //  const [user, setUser] = useState(null);

  return (
    <form className="register-page">
      <div className="label">
        <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" />
      </div>

      <div className="label">
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" />
      </div>

      <div className="label">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
      </div>

      <div className="label">
        <label htmlFor="passwd">Password</label>
        <input type="password" name="passwd" />
      </div>

      <input type="submit" value="Sign up" className="btn" />

      <p className="signin-switch">
        Already have an account? <NavLink to="../login">Login</NavLink>
      </p>
    </form>
  );
};

export default Form;
