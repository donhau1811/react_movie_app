import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const ModalContent = ({ id }) => {
  const [videoId, setVideoId] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`
    );
    setVideoId(data?.results[0].key);
  };

  useEffect(() => {
    fetchVideo();
  }, []);
  console.log(videoId);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default ModalContent;
