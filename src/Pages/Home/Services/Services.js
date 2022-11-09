import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://lawyer-website-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 pt-20">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service}></ServiceCard>
      ))}

      <div>
        <button className=""></button>
      </div>
      <div className="mb-4">
        <button className="btn btn-error">See More</button>
      </div>
      <h1></h1>
    </div>
  );
};

export default Services;
