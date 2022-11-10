import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../Services/ServiceCard";

const ServicesHome = ({ service }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://lawyer-website-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 pt-10">
        {services.slice(0, 3).map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}

        <div>
          <button className=""></button>
        </div>
        <div className="mb-4">
          <Link to="/services">
            <button className="btn btn-error">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
