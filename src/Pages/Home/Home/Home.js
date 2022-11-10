import React from "react";
import useDynamicTitle from "../../../hooks/useDynamicTitle";
import Banner from "../Banner/Banner";
import HappyCustomer from "../HappyCustomer/HappyCustomer";
import ServicesHome from "../ServicesHome/ServicesHome";
import Smiling from "../Smiling/Smiling";

const Home = () => {
  // Use Title
  useDynamicTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <ServicesHome></ServicesHome>
      <Smiling></Smiling>
      <HappyCustomer></HappyCustomer>
    </div>
  );
};

export default Home;
