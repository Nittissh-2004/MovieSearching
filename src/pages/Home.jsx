import React, { useEffect, useState } from "react";
import SearchBar from "../components/Searchbar";
import MovieGrid from "../components/Moviegrid";
import Pagination from "../components/Pagination";
import MovieFilter from "../components/MovieFilter";
import ErrorMessage from "../components/Errormessage";
import { fetchMovies } from "../Services/omdbservice";

const randomKeywords = [
  "Avengers",
  "Batman",
  "Superman",
  "Spiderman",
  "Harry Potter",
  "Matrix",
  "Inception",
  "Lord of the Rings",
  "Star Wars",
  "Jurassic Park",
  "Hero",
  "Run"
];

const getRandomKeyword = () => {
  const randomIndex = Math.floor(Math.random() * randomKeywords.length);
  return randomKeywords[randomIndex];
};

const Home = () => {
  const [query, setQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async (searchQuery, page = 1, type = "") => {
    setLoading(true);
    setError("");
    try {
      const { movies, totalResults, error } = await fetchMovies(
        searchQuery,
        page,
        type
      );
      if (error) {
        setError(error);
        setMovies([]);
        setTotalResults(0);
      } else {
        setMovies(movies);
        setTotalResults(totalResults);
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setMovies([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (q) => {
    setQuery(q);
    setCurrentPage(1);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRefresh = () => {
    const randomKeyword = getRandomKeyword();
    setQuery("");
    setFilterType("");
    setCurrentPage(1);
    fetchData(randomKeyword);
  };

  useEffect(() => {
    if (!query) {
      const keyword = getRandomKeyword();
      fetchData(keyword);
    } else {
      fetchData(query, currentPage, filterType);
    }
  }, [query, currentPage, filterType]);

  const totalPages = Math.ceil(totalResults / 5);

  return (
    <div className="p-4 max-w-6xl mx-auto">
    
      <div className="flex justify-between items-center mb-4">
       
        <h1 className="text-2xl font-extrabold italic flex items-center gap-2 text-red-700">
          Movies Search App 
          <img
            className="w-10 h-10"
            src="https://cdn-icons-png.flaticon.com/512/3163/3163500.png"
            alt="searchIcon"
          />
     
        </h1>
       
        <button
          onClick={handleRefresh}
          className="bg-emerald-800 text-white px-4 py-2 rounded hover:bg-red-950 transition"
        >
        Refresh Suggestions 
        </button>
      
      </div>
       <SearchBar onSearch={handleSearch} />
    <MovieFilter onFilterChange={handleFilterChange} />
      {error && <ErrorMessage message={error} />}
      {loading ? (
        <div className="text-center my-4">Loading...</div>
      ) : (
        <MovieGrid movies={movies} />
      )}
    
      {totalPages > 1 && query && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    
    </div>
  );
};

export default Home;