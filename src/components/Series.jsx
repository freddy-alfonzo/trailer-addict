import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Context } from "./NavBar";
import { AiFillPlayCircle} from "react-icons/ai";
import NoImg from "./assets/no_img.jpg";
import "../Styles/Videos.css";
import TrailerMovies from "../Trailers/TrailerMovies";

function Movies() {
  const { toggle, inputValue } = useContext(Context);
  const input = inputValue;
  const api = input ? "search" : "discover";
  const [moviesData, setMoviesData] = useState([]);
  const [trailer, setTrailer] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");
  const [movie, setMovie] = useState({});

  const movieCall = async () => {
    const data = await axios.get(`https://api.themoviedb.org/3/${api}/tv`, {
      params: {
        api_key: "bfb0e208917198ac83bd77dd5d4eb23e",
        query: input,
      },
    });
    const results = data.data.results;
    setMoviesData(results);
  };

  useEffect(() => {
    movieCall();
  }, [input]);

  const clickHandlder = (movie) => {
    setMovieTitle(movie.name);
    setMovie(movie)
    setTrailer(!trailer);
  };

  if (moviesData.length === 0)
    return (
      <main className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <section className="movies-container">
          <h3 className={toggle ? "dark-theme" : "light-theme"}>
            No series found for "{input}"
          </h3>
        </section>
      </main>
    );
  return (
    <main className={toggle ? "mainBgColor" : "secondaryBgColor"}
    >

      <section className="movies-container">
        {moviesData.map((movie, i) => (
          <div className={trailer ? "no-container" : "main-container"} key={i}>
            <div className="ms-3 me-3 my-3">
              <div
                className="img-container"
                onClick={() => clickHandlder(movie)}
              >
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : NoImg
                  }
                  alt={i}
                />
                <AiFillPlayCircle color="#fff" fontSize={40} className="playIcon" />
              </div>
            </div>
            <h3 className={toggle ? "dark-theme" : "light-theme"}>
              {movie.name}
            </h3>
          </div>
        ))}
        {trailer ? <TrailerMovies movieTitle={movieTitle} movie={movie} trailer={trailer} setTrailer={setTrailer}/> : ""}
        
      </section>
    </main>
  );
}

export default Movies;
