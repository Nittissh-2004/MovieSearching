import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className="border p-2 rounded shadow">
    <Link to={`/movie/${movie.imdbID}`}>
      <img src={movie.Poster} alt={movie.Title} className="w-full h-60 object-cover" />
      <h2 className="mt-2 font-bold">{movie.Title}</h2>
      <p>{movie.Year}</p>
    </Link>
  </div>
);

export default MovieCard;