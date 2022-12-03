import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-hot-toast";

const Update = () => {
  const userReviewed = useLoaderData();
  const [review, setReview] = useState(userReviewed);

  const handleUpdateReview = (event) => {
    event.preventDefault();

    fetch(
      `https://physiotherapy-server.vercel.app/reviews/${userReviewed._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Review Updated Successfully");
        }
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...review };
    newUser[field] = value;
    setReview(newUser);
  };

  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold text-cyan-600 m-2">
        {userReviewed.reviewName}{" "}
      </h2>
      <form className="bg-gray-600 p-12" onSubmit={handleUpdateReview}>
        <div>
          <div className="col-span-full sm:col-span-3 w-1/4">
            <label htmlFor="email" className="text-sm text-white">
              Email
            </label>
            <input
              onChange={handleInputChange}
              name="email"
              type="email"
              placeholder="Email"
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-4"
              defaultValue={userReviewed?.email}
              readOnly
            />
          </div>
          <div className="col-span-full my-8 w-3/4">
            <label htmlFor="address" className="text-white">
              <h2 className="text-2xl">Update Your Thinking!</h2>
              <span>Change Review </span>
            </label>
            <textarea
              onChange={handleInputChange}
              name="textarea"
              className="textarea textarea-bordered w-full h-40"
              placeholder="Type here."
              defaultValue={userReviewed.textarea}
            ></textarea>
          </div>
        </div>

        <button className="btn bg-cyan-600">Update</button>
      </form>
    </div>
  );
};

export default Update;
