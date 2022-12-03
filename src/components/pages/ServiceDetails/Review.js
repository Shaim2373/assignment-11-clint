import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaStarHalfAlt } from "react-icons/fa";

const Review = ({ review }) => {
  const { user } = useContext(AuthContext);

  
  const { textarea } = review;
  return (
    <div>
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100 text-white bg-cyan-700">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4 items-center">
            <div>
              <img
                src={user?.photoURL}
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">{user?.displayName}</h4>
            </div>
          </div>
          <div className="flex items-center space-x-2 dark:text-yellow-500">
            <FaStarHalfAlt className="text-yellow-400"></FaStarHalfAlt>
            <FaStarHalfAlt className="text-yellow-400"></FaStarHalfAlt>
            <FaStarHalfAlt className="text-yellow-400"></FaStarHalfAlt>
            <span className="text-xl font-bold">4.5</span>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p>{textarea}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
