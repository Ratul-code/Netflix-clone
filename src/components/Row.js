import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchurl, isLarge, dict }) {
  const [movies, setMovies] = useState([]);
  const [trailerurl, settrailerurl] = useState("");
  const baseurl = `https://image.tmdb.org/t/p/w500/`;

  useEffect(() => {
    async function fetchdata() {
      const req = await axios.get(fetchurl);
      setMovies(req.data.results);
      return req;
    }
    fetchdata();
  }, [fetchurl]);
  const opts = {
    height: "390",
    width: "100%",
    // playerVars: {
    //   // https://developers.google.com/youtube/player_parameters
    //   autoplay: 1,
    // },
  };

  const handleClick = (movie) => {
    if (trailerurl) {
      settrailerurl();
    } else {
      movieTrailer(movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerurl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie) => {
          if (movie.backdrop_path != null || movie.backdrop_path != undefined) {
            return (
              <img
                key={movie.id}
                onClick={() => {
                  handleClick(movie);
                }}
                className={`row_poster ${isLarge && "row_posterlarge"}`}
                src={`${baseurl}${
                  isLarge ? movie.poster_path : movie?.backdrop_path
                }`}
                alt={movie.name}
              />
            );
          }
        })}
      </div>
      {trailerurl && <Youtube videoId={trailerurl} opts={opts} />}
    </div>
  );
}

export default Row;
