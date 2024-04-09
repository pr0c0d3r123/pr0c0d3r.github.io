import "./register.css";
import { Nav } from "../../../components";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="center">
      <Nav />
      <form className="register-page">
        <div className="label">
          <label htmlFor="Email">Email</label>
          <input type="email" name="Email" />
        </div>

        <div className="label">
          <label htmlFor="Passwd">Password</label>
          <input type="password" name="Passwd" />
        </div>

        <input type="submit" value="Login" className="btn" />

        <p className="signin-switch">
          New here? <NavLink to="../signup">Sign Up</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
