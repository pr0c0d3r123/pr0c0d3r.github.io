import { NavLink } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <h2>Ready to discover some natural products?</h2>
      <NavLink to="products">I am ready!</NavLink>
    </div>
  );
};

export default Main;
