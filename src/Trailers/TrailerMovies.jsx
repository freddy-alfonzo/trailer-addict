import React from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../components/NavBar";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import { Modal, Button } from "react-bootstrap";
import "../Styles/Trailer.css";

function TrailerMovies({ movieTitle, movie, trailer, setTrailer }) {
  const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [loader, setLoader] = useState(false);
  const { toggle } = useContext(Context);
  const width = window.innerWidth;
  console.log(width);

  function handleSearch() {
    setVideo(movieTitle);
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }
  function loaderHandler() {
    if (videoURL === null) setLoader("Loading...");
    setInterval(() => {
      setLoader("Video not found, try with another Movie / Tv Show");
    }, 3000);
  }

  useEffect(() => {
    handleSearch();
    loaderHandler();
  }, [videoURL]);

  return (
    <>
      <div className="player">
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
                <h3 className={
                    toggle
                      ? "text-white text-center mt-5 mb-5 fs-3"
                      : "text-black text-center mt-5 mb-5 fs-3"
                  }>{loader}</h3>
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
      </div>
    </>
  );
}

export default TrailerMovies;
