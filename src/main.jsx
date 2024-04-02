// Main Page

import Index from "./Index";

// Components

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages

import {
  About,
  Contact,
  Products,
  Login,
  SignUp,
} from "./components/Nav/Pages/pages";

import Error from "./components/Nav/Pages/Error";

// Router

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <Error />,
  },
  {
    path: "products",
    element: <Products />,
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
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

// Render Page

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
