import "./register.css";
import { Nav } from "../../../components";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="center login-page">
      <Nav />
      <div className="email">
        <label htmlFor="Email">Email</label>
        <input type="email" name="Email" />
      </div>

      <div className="passwd">
        <label htmlFor="Passwd">Password</label>
        <input type="password" name="Passwd" />
      </div>

      <NavLink to="/" className="next-page">
        Login
      </NavLink>

      <p className="signin-switch">
        New here? <NavLink to="../signup">Sign Up</NavLink>
      </p>
    </div>
  );
};

export default Login;
