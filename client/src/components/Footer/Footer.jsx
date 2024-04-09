import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <NavLink to="https://www.instagram.com/n4168460/">
          <img src="src/icons/instagram.png" alt="Instagram" />
        </NavLink>
        <NavLink to="https://www.github.com/pr0c0d3r123/">
          <img src="src/icons/github.png" alt="Github" />
        </NavLink>
        <NavLink to="https://twitter.com/Nathan282944">
          <img src="src/icons/twitter.png" alt="X" />
        </NavLink>
      </div>

      <p>PRIVREDNO GAZDINSTVO MOLNAR &copy;</p>
    </footer>
  );
};

export default Footer;
