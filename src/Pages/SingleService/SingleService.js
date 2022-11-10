import React from "react";
import { useLoaderData } from "react-router-dom";
import useDynamicTitle from "../../hooks/useDynamicTitle";

const SingleService = () => {
  const { name, img, price, description } = useLoaderData();
  console.log(name);

  // Use Title
  useDynamicTitle("Service Details");
  return (
    <div>
      <div className="card  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <div className="badge badge-outline text-white font-semibold p-6">
              ${price}
            </div>
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
