import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/MovieDataBase.css";
import Axios from "axios";
import Nav from "./Nav";
import LoadingSpinner from "./LoadingSpinner";
const MovieDatabase = () => {
  const [movieData, setMovieData] = useState([]);
  const [value, setValue] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        await Axios.get("https://mern-movie-k4bc.onrender.com/getMovies").then(
          (response) => {
            setMovieData(response.data);
            setIsLoading(false);
          }
        );
      } catch (err) {}
    };

    getMovies();
  }, [value]);

  const deleteMovie = async (id) => {
    try {
      await Axios.delete(
        `https://mern-movie-k4bc.onrender.com/deleteMovie/${id}`
      ).then((res) => {
        alert("Movie Deleted");
      });
    } catch (err) {
      alert(err);
    }
    setValue(!value);
  };

  const renderMovieDatabase = (
    <div className="grid">
      <div className="heading">
        <div>Name</div>
        <div>Rating</div>
        <div>Category</div>
      </div>

      {movieData.map((movie) => (
        <div className="table">
          <input value={movie.name} />
          <input value={`${movie.rating}/5`} />
          <input value={movie.category} />
          <button
            onClick={() => {
              navigate(`editMovie/${movie._id}`);
            }}
          >
            Edit
          </button>

          <button onClick={() => deleteMovie(movie._id)}>Delete</button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container">
      <Nav />

      <h1>Movie Database</h1>
      {isLoading ? <LoadingSpinner /> : renderMovieDatabase}
    </div>
  );
};

export default MovieDatabase;
