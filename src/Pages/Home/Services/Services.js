import React, { useEffect, useState } from "react";
import useDynamicTitle from "../../../hooks/useDynamicTitle";
import Spinner from "../Spinner/Spinner";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://lawyer-website-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // Use Title
  useDynamicTitle("Services");
  return (
    <div>
      {/* Spinner */}
      <Spinner></Spinner>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
