import Head from "next/head";
import React, { useState, useEffect, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { FormWrapper, PageWrapper } from "../styles";
import Alert from "../components/alert";
import { debounce } from "lodash";
import {
  CardMedia,
  ImageListItem,
  ImageList,
  ImageListItemBar,
  Grid,
  InputAdornment,
  TextField,
  Avatar,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { StyledRating } from "../styles";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";
import NoMovieAvailable from "../components/emptyMovie";
import { green } from "@mui/material/colors";
import CircularProgress from '@mui/material/CircularProgress'

interface movies {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
}

const Home = () => {
  //create the state for loading  movies
  const [movies, setMovies] = useState([]);

  console.log(`res`, movies)
  const [query, setQuery] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
  const [open, setOpen] = useState(true);
  const closeAlert = () => {
    setOpen(false);
  };

  //handle movie search by name
  const searchMovies = async (event: any) => {
    event.preventDefault();
    try {
      const res = await fetch(`/api/mpesacharges?amount=${query}`);
      const movieList = await res.json();
      setMovies(movieList.charges);
    } catch (error) {
      error && setErrorAlert(true);
    }
  };

  //set favorite movies
  const saveFavoriteMovie = (movieId: string) => {
    let favoriteList: any = [];
    let favMovieId = movieId;
    favoriteList.push(favMovieId);
    if (typeof window !== "undefined") {
      localStorage.setItem("movieId", favoriteList);
    }
  };
  //get favorite movies
  let favoriteMovieId =
    typeof window !== "undefined" ? localStorage.getItem("movieId") : null;
  //handle text input value change
  const handleChange = (event: any) => {
    setQuery(event.target.value);
    searchMovies(event);
  };

  // essential because if we don’t persist this data between re-renders
  // other implementations of debounce will occur on every re-render
  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 200);
  }, []);

  //clean up any side effects from debounce when our component gets unmounted
  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <>
      <Head>
        <title>Mpesa Rates</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      {errorAlert && <Alert open={open} closeAlert={closeAlert} />}
      <PageWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} sx={{mx:1}}>
            <FormWrapper component="div">
              <TextField
                size="medium"
                onChange={handleChange}
                className="input"
                sx={{
                  borderRadius: "1.5rem",
                  boxShadow: "rgb(157 168 189 / 10%) 0px 4px 8px",
                }}
                type="number"
                name="query"
                placeholder="Type amount in ksh..."
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormWrapper>
          </Grid>
          {movies.map((movie: any, index: any) => {
            return (

              <Grid key={index} item xs={12} md={12} sx={{mx:2}}>
                <Paper
                  key={index}
                  sx={{
                    maxWidth: 936, borderRadius: "0.5rem",
                    boxShadow: "rgb(157 168 189 / 10%) 0px 4px 8px",
                  }}>
                  <ListItem
                    secondaryAction={
                      <>
                        {movie?.amount ? (
                          <Typography
                            sx={{ display: 'inline', fontWeight: "bold" }}
                            component="span"
                            variant="button"
                            color="primary"
                          >
                            {movie.amount}
                          </Typography>
                        ) : (
                          <CircularProgress />
                        )}
                      </>
                    }
                    disablePadding
                  >
                    <ListItemButton>
                      {/* <Avatar sx={{ bgColor: green[500], mr: 2, height: "1rem", width: "1rem" }} src="" /> */}
                      <ListItemText id={index} primary={movie.type} secondary="A registered mpesa line" />
                    </ListItemButton>
                  </ListItem>
                </Paper >

              </Grid>

            )
          }
          )}
        </Grid>
      </PageWrapper>
    </>
  );
};

export default Home;
