import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div className="mt-6">
      <div className="navbar bg-base-100 shadow-2xl">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <button className="btn btn-ghost normal-case text-xl">
              <p className="text-cyan-600">Physiotherapy Service</p>
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.uid && (
            <>
              <img
                className="w-12 mr-2 rounded-full"
                src={user.photoURL}
                alt=""
              />
            </>
          )}
          <Link to="/myReviews">
            <button className="btn btn-ghost border-b-2 border-cyan-600 hover:text-cyan-600 mr-3">
              My Reviews
            </button>
          </Link>
          <Link to="/addService">
            <button className="btn btn-ghost border-b-2 border-cyan-600 hover:text-cyan-600 mr-3">
              Add Service
            </button>
          </Link>

          {user?.uid ? (
            <>
              <button
                onClick={handleLogOut}
                className="btn btn-outline btn-error"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-ghost">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-ghost">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
