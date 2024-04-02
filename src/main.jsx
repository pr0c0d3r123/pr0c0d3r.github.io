import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./Index";
import ErrorPage from "./ErrorPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Index />, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
