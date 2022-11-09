import React from "react";

const Banner = () => {
  return (
    <div className="">
      <div
        className="hero"
        style={{
          backgroundImage: `url("https://i.postimg.cc/tT8zB142/Banner-10.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content py-48">
          <div className="max-w-md">
            {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
            <p className="mb-5 text-xl text-white">
              Advocate for employee rights and help people comply with workplace
              laws.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
