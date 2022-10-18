import Head from "next/head";
import React, { useState, useEffect, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { FormWrapper, PageWrapper } from "../styles";
import Alert from "../components/alert";
import { debounce } from "lodash";
import {
  Grid,
  TextField,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { StyledRating } from "../styles";
import { green } from "@mui/material/colors";
import CircularProgress from '@mui/material/CircularProgress'


const rateTypes = [
  { type: "Send to Registered Number", amount: 0 },
  { type: "Send to Unregistered Number", amount: 0 },
  { type: "Withdraw at Agent", amount: 0 },
  { type: "Maximum Withdrawable at Agent", amount: 0 },
  { type: "Minimum Balance - Send to Registered", amount: 0 },
  { type: "Minimum Balance - Send to Unregistered", amount: 0 },
  { type: "Amount + Withdrawal & Sending Charge", amount: 0 },
  { type: "Amount + Withdrawal Charge", amount: 0 }]

const Home = () => {
  //create the state for loading  rates
  const [rates, setRates] = useState([]);
  const [query, setQuery] = useState("");

  //handle rate search by name
  const searchRates = async (event: any) => {
    event.preventDefault();
    try {
      const res = await fetch(`/api/mpesacharges?amount=${query}`);
      const rateList = await res.json();
      console.log(`rateList`, rateList.sendAndWithdraw)
      setRates(rateList.sendAndWithdraw);
    } catch (error) {
      error
    }
  };

  //handle text input value change
  const handleChange = (event: any) => {
    setQuery(event.target.value);
    searchRates(event);
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
        <title>Mpesa Cost calculator</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=ubuntu:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PageWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} sx={{ mx: 1, mt: 1 }}>
            <FormWrapper component="div">
              <TextField
                size="small"
                label="Amount"
                onChange={handleChange}
                className="input"
                sx={{
                  borderRadius: "10rem",
                  boxShadow: "rgb(157 168 189 / 10%) 0px 4px 8px",
                }}
                type="number"
                name="query"
                placeholder="Enter amount in ksh..."
                fullWidth
              />
            </FormWrapper>
          </Grid>
          {rates.map((rate: any, index: any) => {
            return (

              <Grid key={index} item xs={12} md={12} sx={{ mx: 2 }}>
                <Paper
                  key={index}
                  sx={{
                    maxWidth: 936, borderRadius: "0.5rem",
                    boxShadow: "rgb(157 168 189 / 10%) 0px 4px 8px",
                  }}>
                  <ListItem
                    secondaryAction={
                      <Typography
                        sx={{ display: 'inline', fontWeight: "500" }}
                        component="span"
                        variant="button"
                        color="primary"
                      >
                        {rate.amount}
                      </Typography>
                    }
                    disablePadding
                  >
                    <ListItemButton>
                      <ListItemText id={index} primary={
                        <Typography
                          component="span"
                          variant="body2"
                        >
                          {rate.type}
                        </Typography>} />
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