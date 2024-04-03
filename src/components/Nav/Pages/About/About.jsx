import Nav from "../../Nav";
import { NavLink } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <div className="center">
      <Nav />
      <h1>About Us</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque
        ullam architecto quidem natus? Itaque totam exercitationem consequatur?
        Ad temporibus sunt itaque nobis cupiditate consectetur nisi! Dolorem
        minima nostrum temporibus! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Labore praesentium, magni nobis, sapiente laudantium
        aspernatur fugit temporibus quaerat molestias eius commodi harum
        suscipit pariatur tempore vitae dolore, quia ipsum ab?
      </h2>

      <NavLink to="/" className="next-page">
        Go Back
      </NavLink>
    </div>
  );
};

export default About;
