// * Make sure that when the user tries to find item that is not available in the database to put h2 element with the text "No results"

// * Imports

import { useRef, useState } from "react";
import Card from "./Card";
import API from "../../../../Handler/API";

// * CSS

import "./products.css";

const Products = () => {
  const [data, setData] = useState(null); // useState hook for storing data from mySQL database
  const ref = useRef(""); // useState hook for storing search value

  const api = new API(); // Creating new API object
  const getData = api.getProdData(); // Getting data from server and storing it inside getData variable

  // * Then/catch block

  getData
    .then((res) => {
      setData(res.data); // Storing result in "data" variable using setData from useState hook
    })
    .catch((err) => {
      console.log(err); // Catching error if it occurs
    });

  // * Rendering component

  return (
    <div className="prod-cont">
      <input
        type="text"
        name="search"
        className="prod-search"
        placeholder="Search for item"
        value={ref.current} // Input value is being stored inside "ref.current" for filtering
        onChange={(e) => (ref.current = e.target.value)} // When input element is changing, it will store the current value in "ref.current"
      />
      <div className="prod-cards">
        {data ? (
          data
            .filter((prod) => {
              // Filter data based on current value of "ref.current"
              if (!ref.current)
                return true; // If current value is empty, return true (for further checking)
              else if (
                prod.name.toLowerCase().includes(ref.current.toLowerCase())
              )
                // "includes()" check if name of product and "ref.current" in lowercase are same, if yes then it returns true (for further checking)
                return true;
              else if (prod.name.toLowerCase() !== ref.current.toLowerCase())
                return false;
              else return false;
            })
            .map(
              (
                prod // Mapping through "data" to render "Card" component with it's properties (defined in "Card.jsx" file)
              ) => (
                <Card
                  key={prod.id}
                  src={prod.src}
                  name={prod.name}
                  alt={prod.alt}
                  price={prod.price}
                />
              )
            )
        ) : (
          <h2>Data not found!</h2> // If data is not received from database then return "Data not found"
        )}
      </div>
    </div>
  );
};

export default Products;
