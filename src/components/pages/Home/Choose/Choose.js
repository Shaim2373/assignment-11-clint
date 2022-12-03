import React from "react";
import img from "../../../../assets/choose.jpg";

const Choose = () => {
  return (
    <div className="shadow-md mt-12">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <div>
              <img
                src={img}
                alt=""
                className="object-contain h-72 sm:h-80 lg:h-96 rounded xl:h-112 2xl:h-128"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Why You choose
              <span className="dark:text-violet-400"> his</span>{" "}
              <span className="text-cyan-600"> services</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Eliminating or reducing pain. ... Helps in avoiding surgery. ...
              Improving overall strength and coordination. ...
              <br className="hidden md:inline lg:hidden" />
              Reducing the dependency on medicines. ... Boosting cardiovascular
              functioning and lung capacity. ... Managing and preventing sports
              related injuries. ... Staying fit at all ages and phases
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Choose;
