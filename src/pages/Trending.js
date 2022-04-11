import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import LoadingComponent from "../components/LoadingComponent";
import ErrorComponent from "../components/ErrorComponent";
import { Button, Grid, TextField } from "@mui/material";
import ContentDetails from "../components/ContentDetails";
import AppPagination from "../components/AppPagination";

const Trending = () => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);

  const fetchSearch = async (searchText) => {
    if (!searchText) {
      return "";
    }
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&page=${page}&include_adult=false&query=${searchText}`
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
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <div style={{ display: "flex", margin: "15px 0" }}>
        <TextField
          style={{ flex: 1 }}
          className="searchBox"
          label="Search"
          variant="filled"
          onChange={(e) => setSearchText(e.target.value)}
          sx={{ backgroundColor: "white", color: "black" }}
        />
        <Button
          variant="contained"
          style={{ marginLeft: 10 }}
          onClick={() => fetchSearch(searchText)}
        >
          <SearchIcon fontSize="large" />
        </Button>
      </div>
      {loading ? (
        <LoadingComponent />
      ) : isErr ? (
        <ErrorComponent />
      ) : (
        <>
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

export default Trending;
