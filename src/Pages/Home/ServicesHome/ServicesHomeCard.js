import React from "react";
import { Link } from "react-router-dom";

const ServicesHomeCard = ({ service }) => {
  const { _id, name, img, price, s_description } = service;
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
            <div className="badge badge-outline text-white font-semibold p-6">
              ${price}
            </div>
            <Link to={`/single_service/${_id}`}>
              <button className="btn btn-primary">View Detsils</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHomeCard;
