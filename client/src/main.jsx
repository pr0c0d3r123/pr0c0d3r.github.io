// React libraries

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components

import Index from "./Index";
import {
  About,
  Contact,
  Products,
  Login,
  SignUp,
} from "./components/Nav/Pages/pages";

// CSS

import "./index.css";

// Initializing router

const router = createBrowserRouter([
  // Making "router" variable for defining "virtual routes" for components
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

document.title = "Natural Products"; // Changing title of the document

// Rendering react app

ReactDOM.createRoot(document.getElementById("root")).render(
  // Using React.StrictMode for safer code and RouterProvider for making webapp use router for routing through pages
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
