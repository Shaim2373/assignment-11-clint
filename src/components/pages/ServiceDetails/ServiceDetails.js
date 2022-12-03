import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStarHalfAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Review from "./Review";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const service = useLoaderData();

  const { _id, name, picture, price, rating, description } = service;
  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const textarea = form.textarea.value;
    const email = form.email.value;

    const userReview = {
      review: _id,
      reviewName: name,
      textarea,
      email,
    };

    // create post
    fetch("https://physiotherapy-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review added successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetch(
      `https://physiotherapy-server.vercel.app/reviews?reviewName=${service?.name}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [service?.name]);

  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={picture}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded"
            />
          </div>
          <div className="p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-lg font-semibold leading-none sm:text-2xl">
              {name}
            </h1>
            <p className="text-lg my-2 text-cyan-600 font-semibold ">
              Price: ${price}
            </p>
            <p className="flex items-center">
              Rating:{" "}
              <FaStarHalfAlt className="mx-2 text-yellow-400"></FaStarHalfAlt>{" "}
              {rating}
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <p className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* review section  */}

      <section className="p-6 my-12 bg-gray-600 dark:text-gray-50">
        <h2 className="text-3xl text-center text-cyan-300 font-bold">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
        <form
          onSubmit={handleAddReview}
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-4 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm text-white">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-4"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-white">
                  <h2 className="text-2xl">Your opinion matters!</h2>
                  <span>How was your experience? </span>
                </label>
                <textarea
                  name="textarea"
                  className="textarea textarea-bordered w-full h-40"
                  placeholder="Type here."
                  required
                ></textarea>
              </div>
            </div>
          </fieldset>
          <div className="w-full">
            {user?.uid ? (
              <button className="btn bg-cyan-600">Add Review</button>
            ) : (
              <Link className="text-white text-xl" to="/login">
                Please <span className="text-cyan-400">Login</span> to add
                review{" "}
              </Link>
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default ServiceDetails;
