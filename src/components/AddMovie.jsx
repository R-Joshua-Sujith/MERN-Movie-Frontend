import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios";
import "./styles/AddMovie.css";

const AddMovie = () => {
  const options = [
    {
      value: "action",
    },
    {
      value: "marvel",
    },
  ];
  const navigate = useNavigate();

  const [imageURL, setImageURL] = useState("");
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieCategory, setMovieCategory] = useState(options[0].value);
  const [videoURL, setVideoURL] = useState("");

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
  const createMovie = async () => {
    if (
      imageURL === "" ||
      movieName === "" ||
      movieDescription === "" ||
      movieRating === "" ||
      movieCategory === "" ||
      videoURL === ""
    ) {
      alert("Please Fill all the fields");
    } else {
      try {
        await Axios.post("https://mern-movie-k4bc.onrender.com/addMovie", {
          src: imageURL,
          name: movieName,
          desc: movieDescription,
          rating: movieRating,
          category: movieCategory,
          link: videoURL,
        }).then((res) => {
          alert("Movie Added Successfully");
          setImageURL("");
          setMovieName("");
          setMovieDescription("");
          setMovieRating("");
          setMovieCategory("");
          setVideoURL("");
          navigate("/");
        });
      } catch (e) {
        alert(e.message);
      }
    }
  };

  return (
    <div className="addMovie">
      <h1 className="headingg">Add Movie</h1>
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

      <div className="button" onClick={createMovie}>
        Add Movie
      </div>
      <Link to="/movie-database" className="moviedatabase">
        Movie Database
      </Link>
    </div>
  );
};

export default AddMovie;
