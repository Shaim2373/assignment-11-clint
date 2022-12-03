import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/SharedPages/Footer/Footer";
import Navbar from "../components/SharedPages/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
