import React from "react";
import { Link } from "react-router-dom";

const SingUp = () => {
  const handleSIngUp = (event) => {
    event.preventDefault();
  };
  return (
    <div className="hero">
      <div className="hero-content flex-col">
        <form onSubmit={handleSIngUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
          </div>

          <Link to="/login" className="">
            <p className=" text-center pb-4">
              Have an Account? please
              <button className=" w-100">- Login</button>
            </p>
          </Link>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
