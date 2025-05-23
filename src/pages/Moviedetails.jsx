import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchMovieById } from '../Services/omdbservice';
import ErrorMessage from '../components/Errormessage';

const MovieDetails = () => {
   const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const data = await fetchMovieById(id);
        if (data.Response === 'False') {
          setError(data.Error);
        } else {
          setMovie(data);
        }
      } catch (err) {
        setError('Failed to load movie details.');
      }
    };

    loadMovie();
  }, [id]);

 if (error) return <ErrorMessage message={error} />;

  return movie ? (
    <div className="p-4 max-w-4xl mx-auto ">
      <Link to="/" className="text-blue-500 mb-4">
        ← Back
      </Link>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <img src={movie.Poster} alt={movie.Title} className="w-64 h-64 object-contain" />
        <div>
          <h2 className="text-3xl font-bold underline decoration-double text-red-800">{movie.Title}</h2>
          <br />
          <p><strong className=' text-red-800'>Year:</strong> {movie.Year}</p>
          <br />
          <p><strong className=' text-red-800' >Genre:</strong> {movie.Genre}</p>
          <br />
          <p><strong className=' text-red-800' >Director:</strong> {movie.Director}</p>
          <br />
          <p><strong className=' text-red-800' >Actors:</strong> {movie.Actors}</p>
          <br />
          <p><strong className=' text-red-800' > Plot:</strong> {movie.Plot}</p>
          <br />
          <p><strong className=' text-red-800' >IMDB Rating:</strong> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default MovieDetails;