import React from 'react';

const MovieFilter = ({ onFilterChange }) => {
  return (
    <select onChange={(e) => onFilterChange(e.target.value)} className="border p-2 rounded-xl">
      <option  value="">All</option>
      <option value="movie">Movie</option>
      <option value="series">Series</option>
      <option value="episode">Episode</option>
    </select>
  );
};

export default MovieFilter;