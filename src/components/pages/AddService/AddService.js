import React from "react";
import { toast } from "react-hot-toast";

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const picture = form.picture.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;


    
    const addService = {
      name,
      picture,
      price,
      rating,
      description,
    };

    fetch("https://physiotherapy-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Service added successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2 className="text-cyan-600 text-3xl font-semibold text-center my-6">
        Add Your Favorite Service.
      </h2>
      <form
        onSubmit={handleAddService}
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid bg-gray-900"
      >
        <fieldset className="grid grid-cols-4 gap-4 p-6 rounded-md shadow-sm bg-gray-900">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="name" className="text-sm text-white">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-4"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="picture" className="text-sm text-white">
                Picture
              </label>
              <input
                name="picture"
                type="url"
                placeholder="picture"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-4"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="price" className="text-sm text-white">
                Price
              </label>
              <input
                name="price"
                type="text"
                placeholder="Price"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-4"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="rating" className="text-sm text-white">
                Rating
              </label>
              <input
                name="rating"
                type="text"
                placeholder="Rating"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-4"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="description" className="text-sm text-white">
                Description
              </label>
              <input
                name="description"
                type="text"
                placeholder="Description"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-4"
              />
            </div>
          </div>
        </fieldset>
        <div>
          <button className="btn bg-cyan-600 m-4">Add Review</button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
