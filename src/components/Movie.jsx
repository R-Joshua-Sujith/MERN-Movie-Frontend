import React from "react";
import Nav from "./Nav";
import "./styles/Movie.css";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
const Movie = () => {
  const { id } = useParams();
  const [src, setSrc] = useState();
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [rating, setRating] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const getMovie = async () => {
    try {
      setIsLoading(true);
      await axios
        .get(`https://mern-movie-k4bc.onrender.com/movie/${id}`)
        .then((response) => {
          setSrc(response.data.src);
          setName(response.data.name);
          setDesc(response.data.desc);
          setRating(response.data.rating);
          setIsLoading(false);
        });
    } catch (err) {}
  };

  useEffect(() => {
    getMovie();
  }, []);

  const renderMovie = (
    <div className="movie-section">
      <img src={src} height="250px" width="200px" alt="movie" />
      <div className="movie-details">
        <p className="desc">{name}</p>
        <Link to={`/video/${id}`} className="button">
          Play Now
        </Link>
        <p className="desc">Rating : {rating} / 5</p>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );

  return (
    <div className="containers">
      <Nav />

      {isLoading ? <LoadingSpinner /> : renderMovie}
    </div>
  );
};

export default Movie;
