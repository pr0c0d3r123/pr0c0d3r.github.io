import Nav from "../../Nav";
import { NavLink } from "react-router-dom";
import "./register.css";

const SignUp = () => {
  return (
    <div className="center register-page">
      <Nav />
      <div className="label">
        <label htmlFor="Fname">First Name</label>
        <input type="text" name="Fname" />
      </div>

      <div className="label">
        <label htmlFor="Lname">Last Name</label>
        <input type="text" name="Lname" />
      </div>

      <div className="label">
        <label htmlFor="Email">Email</label>
        <input type="email" name="Email" />
      </div>

      <div className="label">
        <label htmlFor="Passwd">Password</label>
        <input type="password" name="Passwd" />
      </div>

      <NavLink to="/" className="next-page">
        Sign Up
      </NavLink>

      <p className="signin-switch">
        Already have an account? <NavLink to="../login">Login</NavLink>
      </p>
    </div>
  );
};

export default SignUp;
