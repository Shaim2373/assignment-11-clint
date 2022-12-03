import React from "react";
import { Link } from "react-router-dom";
import mainImg from "../../../assets/blog-images/main.jpg";
import img1 from "../../../assets/blog-images/img1.jpg";
import img2 from "../../../assets/blog-images/img2.jpg";
import img3 from "../../../assets/blog-images/img3.jpg";
import img4 from "../../../assets/blog-images/img4.png";

const Blog = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
            src={mainImg}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl text-cyan-600 ">
              Here is few FAQ. question blow
            </h3>

            <p>A some questions to back-end development including articles</p>
          </div>
        </Link>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group dark:bg-gray-900"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={img1}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold">
                Difference between sql and nosql!
              </h3>

              <p>
                SQL is the programming language used to interface with
                relational databases. (Relational databases model data as
                records in rows and tables with logical links between them).
                NoSQL is a class of DBMs that are non-relational and generally
                do not use SQL.
              </p>
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group dark:bg-gray-900"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={img2}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold">
                What is JWT, and how does it work?
              </h3>

              <p>
                What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
                standard (RFC 7519) for securely transmitting information
                between parties as JSON object. It is compact, readable and
                digitally signed using a private key/ or a public key pair by
                the Identity Provider(IdP)
              </p>
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto dark:bg-gray-900"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={img3}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold">
                What is the difference between javascript and NodeJS?
              </h3>

              <p>
                vaScript is a simple programming language that can be used with
                any browser that has the JavaScript Engine installed. Node. js,
                on the other hand, is an interpreter or execution environment
                for the JavaScript programming language
              </p>
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group dark:bg-gray-900"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={img4}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold">
                How does NodeJS handle multiple requests at the same time?
              </h3>

              <p>
                How NodeJS handle multiple client requests? NodeJS receives
                multiple client requests and places them into EventQueue. NodeJS
                is built with the concept of event-driven architecture. NodeJS
                has its own EventLoop which is an infinite loop that receives
                requests and processes them
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
