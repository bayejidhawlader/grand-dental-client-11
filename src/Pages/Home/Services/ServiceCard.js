import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { _id, name, img, price, description } = service;
  return (
    <div className="m-6">
      <div className="card">
        <figure>
          {/* React Photo View */}
          <PhotoProvider className="cursor-pointer">
            <PhotoView src={img}>
              <img src={img} alt="" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-start">{name}</h2>
          <p className="text-start">{description.slice(0, 95)}...</p>
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

export default ServiceCard;
