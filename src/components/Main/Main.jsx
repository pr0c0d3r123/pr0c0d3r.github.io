import { NavLink } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="title">
        <h1>Welcome!</h1>
        <h2>Ready to discover some natural products?</h2>
      </div>
      <NavLink to="products" className="next-page">
        I am ready!
      </NavLink>
    </div>
  );
};

export default Main;
