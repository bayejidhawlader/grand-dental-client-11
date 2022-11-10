import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSingOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/blog">Blog</a>
              </li>

              <li>
                <a href="/login">Login</a>
              </li>

              <li>
                <a href="/services">Services</a>
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-xl">
            <a href="/" className="font-bold text-xl">
              Grand Dental
            </a>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/blog">Blog</a>
            </li>

            <li>
              <a href="/login">Login</a>
            </li>

            <li>
              <a href="/services">Services</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <span className="mr-2">{user?.displayName}</span>

          <div>
            {user?.photoURL ? (
              <img className="rounded w-8 mr-2" src={user?.photoURL} alt="" />
            ) : (
              <p></p>
            )}
          </div>

          <div>
            {user?.email ? (
              <button className="btn btn-primary" onClick={handleSingOut}>
                Log Out
              </button>
            ) : (
              <Link to="/login"></Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
