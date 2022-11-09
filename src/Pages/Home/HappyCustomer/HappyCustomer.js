import React from "react";

const HappyCustomer = () => {
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/14112630/pexels-photo-14112630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="">
            <h1 className="mb-5 text-2xl font-bold">A Wonderful expirience</h1>
            <p className="mb-5">
              My daughter is not afraid of the dentist anymore and her teeth are
              healthy and look absolutely beautiful!
            </p>
            <p>Syndra White</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomer;
