import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();


  
  return (
    <div id="error-page">
      <div className="text-center mt-12">
        <h1 className="text-red-600 text-4xl mb-8 font-bold">
          404 Page Not Found!
        </h1>
        <p>
          Looks like you have followed a broken link or entered a URL that
          doesn't exist on this site.
        </p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <p className="mt-6">
          <Link to="/">
            <button className="btn btn-warning ">
              {" "}
              <FaArrowLeft className="mr-3"></FaArrowLeft> Back to our site
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
