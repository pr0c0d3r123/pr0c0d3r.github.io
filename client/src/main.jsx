//* React libraries

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//* Components

import Index from "./Index";

//* CSS

import "./index.css";

//* Rendering react app

ReactDOM.createRoot(document.getElementById("root")).render(
  // Using React.StrictMode for safer code and Routes for being able to route through other components (* means that "Index" component is place where everything is being rendered on)
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
