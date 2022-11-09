import React from "react";
import { Link } from "react-router-dom";

const Smiling = () => {
  return (
    <div>
      <div className="hero bg-white  text-black py-7">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello Patient</h1>
            <p className="py-4">
              Smiling is contagious. Most of our patients say that they smile so
              much more after getting porcelain veneers. Transforming both the
              way you look and how people perceive you. Schedule a consultation
              with Dr. Plotnick today to find out what's possible.
            </p>
            <Link to="/login">
              <button className="btn btn-primary">Book Consultation</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smiling;
