import React from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../components/NavBar";
import ReactPlayer from "react-player";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import "../Styles/Trailer.css";

function TrailerMovies({ movieTitle, movie, trailer, setTrailer }) {
  const [videoURL, setVideoURL] = useState("");
  const [loader, setLoader] = useState(false);
  const { toggle } = useContext(Context);
  const width = window.innerWidth;
  const movieOrTv = movie.title ? "movie" : "tv";

  const movieTrailerCall = async () => {
    axios
      .get(`https://api.themoviedb.org/3/${movieOrTv}/${movie.id}`, {
        params: {
          api_key: "bfb0e208917198ac83bd77dd5d4eb23e",
          append_to_response: "videos",
        },
      })
      .then((res) => {
        setVideoURL(
          `https://www.youtube.com/watch?v=${
            res.data.videos.results[res.data.videos.results.length - 1].key
          }`
        );
      })
      .catch((e) => {
        console.log(e);
        setVideoURL(null);
      });
  };

  function loaderHandler() {
    if (videoURL === null) setLoader("Loading...");
    setInterval(() => {
      setLoader("Video not found, try with another Movie / Tv Show");
    }, 3000);
  }

  useEffect(() => {
    movieTrailerCall();
    loaderHandler();
  }, [videoURL]);
   return (
    <>
      <section className="player">
        {videoURL === null ? (
          <Modal
            show={true}
            size={width > 341 ? "lg" : ""}
            fullscreen={width < 342 ? true : false}
          >
            <div className={toggle ? "bg-dark1" : "bg-light1"}>
              <Modal.Header closeButton onClick={() => setTrailer(false)}>
                <div className="title-box"></div>
                <Modal.Title className="text-center m-auto">
                  {movieTitle}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-container">
                <h3
                  className={
                    toggle
                      ? "text-white text-center mt-5 mb-5 fs-3"
                      : "text-black text-center mt-5 mb-5 fs-3"
                  }
                >
                  {loader}
                </h3>
                <h3
                  className={
                    toggle
                      ? "text-white text-center mt-5 mb-5 fs-5"
                      : "text-black text-center mt-5 mb-5 fs-5"
                  }
                >
                  {movie.overview}
                </h3>

                <h3 className={toggle ? "fw-bold mt-5" : "fw-bold mt-5"}>
                  {movie.release_date
                    ? movie.release_date
                    : movie.first_air_date}
                </h3>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="dark" onClick={() => setTrailer(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </div>
          </Modal>
        ) : (
          <div>
            <Modal
              show={true}
              size={width > 341 ? "lg" : ""}
              fullscreen={width < 342 ? true : false}
            >
              <div className={toggle ? "bg-dark1" : "bg-light1"}>
                <Modal.Header closeButton onClick={() => setTrailer(false)}>
                  <div className="title-box"></div>
                  <Modal.Title className="text-center m-auto">
                    {movieTitle}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-container">
                  <ReactPlayer
                    url={videoURL}
                    controls={true}
                    playing={true}
                    width={1000}
                    height={width > 991 ? 600 : 300}
                  />

                  <h3
                    className={
                      toggle
                        ? "text-white text-center mt-5 fs-5"
                        : "text-black text-center mt-5 fs-5"
                    }
                  >
                    {movie.overview}
                  </h3>

                  <h3 className={toggle ? "fw-bold mt-5" : "fw-bold mt-5"}>
                    {movie.release_date
                      ? movie.release_date
                      : movie.first_air_date}
                  </h3>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="dark" onClick={() => setTrailer(false)}>
                    Close
                  </Button>
                </Modal.Footer>
              </div>
            </Modal>
          </div>
        )}
      </section>
    </>
  );
}

export default TrailerMovies;
