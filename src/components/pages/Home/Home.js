import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import img from "../../../assets/doctor.jpg";

import AllServices from "./AllServices/AllServices";
import Article from "./Article/Article";
import Choose from "./Choose/Choose";

const Home = () => {
  const services = useLoaderData();


  return (
    <div>
      <div className="bg-base-200">
        <div className="hero bg-base-200 mt-12">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={img} alt="" className="max-w-sm rounded-lg shadow-2xl" />

            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-cyan-600 font-bold">Dr: Bruno</span>{" "}
                Professional Physiotherapist
              </h1>
              <p className="py-6  text-2xl">
                He is providing high quality{" "}
                <span className="text-cyan-600">Physiotherapy</span> Services
              </p>
              <Link to="/services">
                <button className="btn bg-cyan-600">
                  Best Services <FaArrowRight className="ml-2"></FaArrowRight>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-center text-cyan-600 font-semibold text-3xl my-4">
          Get world class service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <AllServices key={services._id} service={service}></AllServices>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Link to="/services">
            <button className="btn bg-cyan-600">
              See all services <FaArrowRight className="ml-2"></FaArrowRight>
            </button>
          </Link>
        </div>
      </div>
      <Choose></Choose>
      <Article></Article>
    </div>
  );
};

export default Home;
