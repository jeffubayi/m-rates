import Head from "next/head";
import { useState, useEffect, useMemo } from "react";
import { PageWrapper } from "../styles";
import { debounce } from "lodash";
import {
  Grid,
  Typography,
  CardContent,
  Card,
  Box
} from "@mui/material";
import TextField from "../components/InputField"

interface rateProps {
  amount: number,
  type: string,
}
const Others = () => {
  //create the state for loading  rates
  const [rates, setRates] = useState([]);

  //handle rate search by name
  const handleChange = async (event: any) => {
    const amount = event.target.value
    try {
      const res = await fetch(`/api/charges?amount=${amount}`);
      const rateList = await res.json();
      setRates(rateList.charges);
    } catch (error) {
      error
    }
  };

  return (
    <>
      <Head>
        <title>Mpesa Cost calculator</title>
        <link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet'></link>
      </Head>
      <PageWrapper>

        <Box sx={{ mx: 1, mt: 1 }}>
          <TextField
            handleChange={handleChange}
          />
        </Box>
        <Grid container spacing={2} mt={2}>
          {
            rates.map(({ amount, type }: rateProps, index: any) => {
              return (
                <Grid item xs={6}>
                  <Card sx={{
                    maxWidth: 936, borderRadius: "0.5rem",
                    boxShadow: "rgb(157 168 189 / 10%) 0px 4px 8px",
                    mb: 1.5,
                    p: 1
                  }} >
                    <CardContent>
                      <Typography gutterBottom variant="subtitle1" component="div">
                        {type}
                      </Typography>
                      <Typography variant="subtitle2" color="primary" sx={{ fontWeight: "bold" }}>
                        Ksh : {amount}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
        </Grid>
      </PageWrapper>
    </>
  );
};

export default Others;