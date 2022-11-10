import React from "react";
import { Outlet } from "react-router-dom";
import Spinner from "../Pages/Home/Spinner/Spinner";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Spinner></Spinner>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
