import React from "react";

const ServiceCard = ({ service }) => {
  const { name, img, price, s_description } = service;
  return (
    <div className="m-6">
      <div className="card">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-start">{name}</h2>
          <p className="text-start">{s_description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline p-6">{price}</div>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
