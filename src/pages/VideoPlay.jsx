import React, { useState } from "react";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../components/styles/VideoPlay.css";
import { useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
const VideoPlay = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getMovie = async () => {
    try {
      setIsLoading(true);
      await axios
        .get(`https://mern-movie-k4bc.onrender.com/movie/${id}`)
        .then((response) => {
          setName(response.data.name);
          setDesc(response.data.desc);
          setRating(response.data.rating);
          setLink(response.data.link);
          setIsLoading(false);
        });
    } catch (err) {}
  };

  useEffect(() => {
    getMovie();
  }, []);

  const renderMovie = (
    <div className="video">
      <iframe
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="movie-detailss">
        <p className="desc">{name}</p>
        <p className="desc">Rating : {rating} / 5</p>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );

  return (
    <div>
      <Nav />
      {isLoading ? <LoadingSpinner /> : renderMovie}
    </div>
  );
};

export default VideoPlay;
