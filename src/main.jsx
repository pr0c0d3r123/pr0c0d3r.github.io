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
import "./index.css";

// Initializing router

const router = createBrowserRouter([
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

// Rendering react app

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
