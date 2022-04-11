import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import ContentDetails from "../components/ContentDetails";
import CarouselSlider from "../components/CarouselSlider";
import AppPagination from "../components/AppPagination";
import Genres from "../components/Genres";
import genresID from "../utils/genresID";
import LoadingComponent from "../components/LoadingComponent";
import ErrorComponent from "../components/ErrorComponent";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genresIds = genresID(selectedGenres);

  //FETCH MOVIES
  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}&with_genres=${genresIds}`
      );
      setMovies(data?.results);
      setLoading(false);
      setNumberOfPages(data?.total_pages);
    } catch (error) {
      console.log(error);
      setIsErr(true);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page, selectedGenres]);

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : isErr ? (
        <ErrorComponent />
      ) : (
        <>
          <CarouselSlider movies={movies} />
          <Genres
            genres={genres}
            setGenres={setGenres}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
          />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {movies?.map((movie) => (
              <Grid item md={6}>
                <ContentDetails movie={movie} />
              </Grid>
            ))}
          </Grid>
          <AppPagination setPage={setPage} pageNumber={numberOfPages} />
        </>
      )}
    </>
  );
};

export default Movies;
