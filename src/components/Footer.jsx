import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black/80 shadow-sm mt-4 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center">           
             © 2025{" "}
            <Link to="/" className="hover:underline">
              MoviesInfo™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
            <li><p className="hover:underline me-4 md:me-6"> </p>
            </li>
            <li><p className="hover:underline me-4 md:me-6"></p>
            </li>
            <li> <p className="hover:underline me-4 md:me-6"> </p>
            </li>
            <li> <p className="hover:underline"> </p>Add commentMore actions
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;