import React, { useCallback, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { moviesContext } from "../components/MoviesProvider";

const Search = () => {
  const { movies, setMovies, setSearch, search, type, setType } =
    useContext(moviesContext);
     // console.log(formData);
     const navigate = useNavigate();
       const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
     navigate("/movies");
  };
  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  return (
    <div>
      <div className="w-max sm:h-40 md:h-96 mx-auto mt-12 mb-12 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold ">Find Your Movies</h1>
        <form className="w-96 mx-auto" onSubmit={handleSubmit}>
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              name="search"
              value={search}
              onChange={handleChange}
              className="block  w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-white/50 focus:ring-red-500 focus:border-red-500 "
              placeholder="Enter Movie title"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-red-600 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
