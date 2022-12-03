import React, { useEffect, useState } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyReview = ({ singleReview, handleDelete }) => {
  const { _id, reviewName, review, textarea } = singleReview;
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    fetch(`https://physiotherapy-server.vercel.app/services/${review}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [review]);
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      {reviews?.picture && (
        <img
          src={reviews.picture}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
      )}
      <div className="mt-6 mb-2">
        <h2 className="text-xl font-semibold tracking-wide">{reviewName}</h2>
      </div>
      <p className="dark:text-gray-100">
        <span className="text-cyan-600">Review</span>: {textarea}
      </p>
      <div className="flex justify-between mt-6">
        <Link to={`/update/${_id}`}>
          {" "}
          <button className="btn btn-ghost">
            <FaEdit className="text-lg text-cyan-600 font-semibold"></FaEdit>
            <small>Edit review</small>
          </button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
          {" "}
          <FaTimes className=" text-lg text-red-600"></FaTimes>
          <small>Delete user</small>
        </button>
      </div>
    </div>
  );
};

export default MyReview;
