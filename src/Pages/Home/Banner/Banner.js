import React from "react";

const Banner = () => {
  return (
    <div className="">
      <div
        className="hero"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/7787978/pexels-photo-7787978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content py-48">
          <div className="max-w-md">
            <p className="mb-5 text-xl text-white">
              I treat every one of my patients' teeth very well so that they do
              not suffer from the same problem again and they can be healthy
              afterwards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
