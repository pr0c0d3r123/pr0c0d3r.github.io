// Import

import { NavLink } from "react-router-dom";

//* Rendering component

const Card = (prop) => {
  return (
    // This component has "props" which means that variables can be passed directly to the component from another component like HTML tag properties (can be seen in the "Products" component)
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
