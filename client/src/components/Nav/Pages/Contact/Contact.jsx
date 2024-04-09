import { Nav } from "../../../components";
import "./contact.css";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="center">
      <Nav />
      <form className="contact">
        <input type="email" name="email" placeholder="Your email" />
        <textarea
          name="desc"
          cols="50"
          rows="50"
          defaultValue="Your description"
        ></textarea>
        <div className="buttons">
          <input type="submit" value="Submit" className="btn" />
          <NavLink to="../" className="btn">
            Go Back
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Contact;
