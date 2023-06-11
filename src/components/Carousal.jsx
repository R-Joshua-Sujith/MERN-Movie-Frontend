import React from "react";
import "./styles/Carousal.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Carousel = () => {
  const [movieData, setMovieData] = useState([]);

  const [image, setImage] = useState("");
  const [i, seti] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        await Axios.get("https://mern-movie-k4bc.onrender.com/topMovies").then(
          (response) => {
            setMovieData(response.data);
            seti(response.data[0]._id);
            setImage(response.data[0].src2);
            setIsLoading(false);
          }
        );
      } catch (err) {}
    };
    getMovies();
  }, []);
  const changeImage = () => {
    if (image === movieData[0].src2) {
      setImage(movieData[1].src2);
      seti(movieData[1]._id);
    } else {
      setImage(movieData[0].src2);
      seti(movieData[0]._id);
    }
  };

  const renderCarousal = (
    <div className="carousal">
      <svg
        onClick={changeImage}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="arrows"
      >
        <path
          fillRule="evenodd"
          d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
          clipRule="evenodd"
        />
      </svg>

      <Link to={`/movie/${i}`}>
        <img className="image" src={image} alt="movie"></img>
      </Link>

      <svg
        onClick={changeImage}
        className="arrows"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
  return (
    <div className="container">
      <h1 className="head">Top Movies</h1>
      {isLoading ? <LoadingSpinner /> : renderCarousal}
    </div>
  );
};

export default Carousel;
