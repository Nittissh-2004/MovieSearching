import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { moviesContext } from "./MoviesProvider";

const Navbar = () => {
    const { count, setCount } = useContext(moviesContext);

  return (
    <div>
      <nav className="bg-black/80">
        <div className="max-w-screen-xl flex  items-center justify-between mx-auto p-4"><Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-red-600">
              Movies Info
            </span>
          </Link>
          <div className="w-full md:block md:w-auto">
            <ul className="font-medium flex flex-col mx-auto p-4 md:p-0 rounded-lg sm:flex-row sm:space-x-8 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
              <li><Link to="/" className="block py-2 px-3 text-white md:p-0">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className="block py-2 px-3 text-red-600   md:p-0 "
                ><span className="bg-white text-black text-sm rounded-lg px-2 mb-2">
                    {count}
                  </span>
                  ❤ Lists
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;