import React from "react";
import "./styles/AddMovie.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import LoadingSpinner from "./LoadingSpinner";
const EditMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [imageURL, setImageURL] = useState("");
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieCategory, setMovieCategory] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const getMovie = async () => {
    try {
      setIsLoading(true);
      await axios
        .get(`https://mern-movie-k4bc.onrender.com/movie/${id}`)
        .then((response) => {
          setImageURL(response.data.src);
          setMovieName(response.data.name);
          setMovieDescription(response.data.desc);
          setMovieRating(response.data.rating);
          setMovieCategory(response.data.category);
          setVideoURL(response.data.link);
          setIsLoading(false);
        });
    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    getMovie();
  }, []);
  const options = [
    {
      value: "action",
    },
    {
      value: "marvel",
    },
  ];

  const imageURLHandler = (event) => {
    setImageURL(event.target.value);
  };
  const movieNameHandler = (event) => {
    setMovieName(event.target.value);
  };
  const movieDescriptionHandler = (event) => {
    setMovieDescription(event.target.value);
  };
  const movieRatingHandler = (event) => {
    setMovieRating(event.target.value);
  };

  const movieCategoryHandler = (event) => {
    setMovieCategory(event.target.value);
  };

  const videoURLHandler = (event) => {
    setVideoURL(event.target.value);
  };

  const edit = async (id) => {
    if (
      imageURL === "" ||
      movieName === "" ||
      movieDescription === "" ||
      movieCategory === "" ||
      movieRating === "" ||
      videoURL === ""
    ) {
      alert("Please fill all the fields");
    } else {
      await axios
        .put(`https://mern-movie-k4bc.onrender.com/editMovie/${id}`, {
          src: imageURL,
          name: movieName,
          desc: movieDescription,
          category: movieCategory,
          rating: movieRating,
          link: videoURL,
        })
        .then(() => {
          alert("Movie updated successfully");
        });
      navigate("/movie-database");
    }
  };

  const renderEditMovie = (
    <>
      <div className="movieForm">
        <div className="subForm">
          <input
            type="text"
            placeholder="Enter Movie Image URL"
            value={imageURL}
            onChange={imageURLHandler}
          />
          <input
            type="tex"
            placeholder="Enter Movie Name"
            value={movieName}
            onChange={movieNameHandler}
          />
          <textarea
            cols="30"
            rows="5"
            placeholder="Enter Movie Description"
            value={movieDescription}
            onChange={movieDescriptionHandler}
          ></textarea>
        </div>
        <div className="subForm">
          <input
            type="number"
            placeholder="Enter Movie Rating"
            onChange={movieRatingHandler}
            value={movieRating}
          />
          <select
            name="cars"
            id="cars"
            onChange={movieCategoryHandler}
            value={movieCategory}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Enter Movie Link"
            onChange={videoURLHandler}
            value={videoURL}
          />
        </div>
      </div>

      <div className="button" onClick={() => edit(id)}>
        Edit Movie
      </div>
    </>
  );
  return (
    <div>
      <Nav />
      <h1 className="headingg">Edit Movie</h1>
      {isLoading ? <LoadingSpinner /> : renderEditMovie}
    </div>
  );
};

export default EditMovie;
