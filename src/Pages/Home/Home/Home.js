import React from "react";
import Banner from "../Banner/Banner";
import HappyCustomer from "../HappyCustomer/HappyCustomer";
import Services from "../Services/Services";
import ServicesHome from "../ServicesHome/ServicesHome";
import Smiling from "../Smiling/Smiling";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServicesHome></ServicesHome>
      {/* <Services></Services> */}
      <Smiling></Smiling>
      <HappyCustomer></HappyCustomer>
    </div>
  );
};

export default Home;
