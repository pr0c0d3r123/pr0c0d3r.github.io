// React libraries

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components

import Index from "./Index";

// CSS

import "./index.css";

document.title = "Natural Products"; // Changing title of the document

// Rendering react app

ReactDOM.createRoot(document.getElementById("root")).render(
  // Using React.StrictMode for safer code
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
