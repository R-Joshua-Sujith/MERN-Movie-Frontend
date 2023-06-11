import React from "react";
import Nav from "../components/Nav";
import Carousel from "../components/Carousal";
import { Link } from "react-router-dom";
import "./Home.css";
import MovieList from "../components/MovieList";
import Axios from "axios";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
const Home = () => {
  const title = ["Action", "Superhero"];
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
  }, []);

  const action = movieData.filter((item) => {
    return item.category === "action";
  });
  const superhero = movieData.filter((item) => {
    return item.category === "marvel";
  });

  const renderMovies = (
    <div>
      <MovieList category={action} title={title[0]} />
      <MovieList category={superhero} title={title[1]} />
    </div>
  );

  return (
    <div className="MovieList">
      <Nav />
      <Carousel />
      {isLoading ? <LoadingSpinner /> : renderMovies}

      <Link to="/addmovie" className="addButton">
        +
      </Link>
    </div>
  );
};

export default Home;
