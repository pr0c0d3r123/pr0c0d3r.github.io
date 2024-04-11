import "./register.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="center">
      <form className="register-page">
        <label htmlFor="Email">
          Email
          <input type="email" name="Email" />
        </label>

        <label htmlFor="Passwd">
          Password
          <input type="password" name="Passwd" className="passwd" />
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
