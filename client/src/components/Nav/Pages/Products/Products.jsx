// Imports

import { useState } from "react";
import { Nav } from "../../../components";
import Card from "./Card";
import API from "../../../../Handler/API";

// CSS

import "./products.css";

const Products = () => {
  // useState hook for storing data from mySQL database

  const [data, setData] = useState(null);

  // Creating new API object

  const api = new API();
  const getData = api.getProdData();

  // Then/catch block

  getData
    .then((res) => {
      setData(res.data); // Storing result in "data" variable using setData from useState hook
    })
    .catch((err) => {
      console.log(err); // Catching error if it occurs
    });

  // Rendering component

  return (
    <div className="prod-cont">
      <Nav />
      {data && // Checking if data is successfully delivered to app (code is not working without this part)
        data.map((el) => (
          <Card // Using map() to iterate through object and setting data to props of "Card" child
            key={el.id}
            src={el.src}
            name={el.name}
            alt={el.alt}
            price={el.price}
          />
        ))}
    </div>
  );
};

export default Products;
