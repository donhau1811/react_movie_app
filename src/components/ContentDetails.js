import { Button } from "@mui/material";
import React from "react";
import { img500x500 } from "../utils/imageLink";
import AppModal from "./AppModal";
import { gtag } from "ga-gtag"; //adding gtag module

const ContentDetails = ({ movie }) => {
  const movieID = movie?.id;

  return (
    <div className="movie_card" id="bright">
      <div className="info_section">
        <div className="movie_header">
          <img
            className="locandina"
            alt=""
            src={`${img500x500}/${movie?.poster_path}`}
          />
          <h1>{movie?.title}</h1>
          <h4>{movie?.release_date}</h4>
          <span className="minutes">{movie?.vote_average}</span>
          <p className="type">{movie?.original_title}</p>
        </div>
        <div className="movie_desc">
          <p className="text">
            {movie?.overview.length > 70
              ? `${movie?.overview.slice(0, 70)}...`
              : movie?.overview}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            margin: "5px",
            justifyContent: "flex-start",
          }}
        >
          <div style={{ margin: "5px" }}>
            <AppModal id={movieID}>
              <li>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() =>
                    gtag("event", "trailer_view", {
                      event_category: "track lượt bấm",
                      event_label: "KPI",
                    })
                  }
                >
                  Watch Trailer
                </Button>
              </li>
            </AppModal>
          </div>
        </div>
      </div>
      <div className="blur_back bright_back">
        <img alt="" src={`${img500x500}/${movie?.backdrop_path}`} />
      </div>
    </div>
  );
};

export default ContentDetails;
