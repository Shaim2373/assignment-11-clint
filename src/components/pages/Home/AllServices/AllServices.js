import React from "react";
import { Link } from "react-router-dom";

const AllServices = ({ service }) => {
  const { _id, name, rating, description, picture, price } = service;
  return (
    <div>
      <div className="card w-96 h-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-80 w-full" src={picture} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-cyan-600 font-semibold">Price: ${price}</p>
          <small>Ratings: {rating}</small>
          <p>{description.slice(0, 100)}</p>
        </div>
        <div className="flex justify-center my-6">
          <Link to={`/serviceDetails/${_id}`}>
            <button className="btn btn-ghost btn border-solid border-2 border-cyan-700">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
