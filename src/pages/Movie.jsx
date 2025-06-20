import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { moviesContext } from "../components/MoviesProvider";

const Movie = () => {
  const { id } = useParams();
  const { movies, setDetail, detail } = useContext(moviesContext);

  useEffect(() => {
    setDetail(id); // if needed
  }, [id, setDetail]);

  const movie = movies.find((m) => m.imdbID === id);

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{movie.Title}</h2>
      <p>{movie.Year}</p>
      <img src={movie.Poster} alt={movie.Title} className="w-60 h-60 mt-2" />
    </div>
  );
};

export default Movie;
