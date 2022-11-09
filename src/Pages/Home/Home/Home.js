import React from "react";
import Banner from "../Banner/Banner";
import HappyCustomer from "../HappyCustomer/HappyCustomer";
import Services from "../Services/Services";
import Smiling from "../Smiling/Smiling";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Smiling></Smiling>
      <HappyCustomer></HappyCustomer>
    </div>
  );
};

export default Home;
