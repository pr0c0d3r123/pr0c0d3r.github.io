// Imports

import { Nav, Main } from "./components/components";
import { Route, Routes } from "react-router-dom";
import "./index.css";

import {
  Products,
  About,
  Contact,
  SignUp,
  Login,
} from "./components/Nav/Pages/pages";

// Rendering component

const Index = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="SignUp" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Index;
