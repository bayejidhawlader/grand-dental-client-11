import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service}></ServiceCard>
      ))}
      <div className="mx-auto">
        <button className="btn btn-error">See More</button>
      </div>
    </div>
  );
};

export default Services;
