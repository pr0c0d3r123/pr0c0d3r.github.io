// Import

import { NavLink } from "react-router-dom";

// Rendering component

const Card = (prop) => {
  return (
    // Putting "prop" parameter inside "img" elements and "p" elements because they're gonna be usable for multiple parameters
    <div className="prod-card">
      <img src={prop.src} alt={prop.alt} loading="lazy" />
      <div className="desc">
        <div>
          <p className="prod-name">{prop.name}</p>
          <p className="prod-price">Cena: {prop.price}din</p>
        </div>
        <NavLink className="btn" to="">
          View
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
