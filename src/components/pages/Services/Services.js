import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const services = useLoaderData();


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
      {services.map((service) => (
        <SingleService key={service._id} service={service}></SingleService>
      ))}
    </div>
  );
};



export default Services;
