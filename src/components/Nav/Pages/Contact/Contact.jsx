import { Nav } from "../../../components";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="center">
      <Nav />
      <h1>Hello Contact</h1>
      <NavLink to="/" className="next-page">
        Go back
      </NavLink>
    </div>
  );
};

export default Contact;
