import Head from "next/head";
import { useState } from "react";
import { PageWrapper } from "../styles";
import { Grid, Paper, Typography } from "@mui/material";
import CostCard from "../components/costCard";
import TextField from "../components/InputField"
import EmptyCard from "../components/emptyCard"

interface rateProps {
  amount: number,
  type: string,
}
const Home = () => {
  const [rates, setRates] = useState([]);
  //handle text input value change on key press
  const handleChange = async (event: any) => {
    const amount = event.target.value
    try {
      const res = await fetch(`/api/sendAndWithdraw?amount=${amount}`);
      const rateList = await res.json();
      setRates(rateList.sendAndWithdraw);
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
        <Grid container spacing={2}>
          < TextField handleChange={handleChange}  />
          <Grid item xs={12} md={12} sx={{ mx: 2 }}>
            {rates.length > 0 ? (
              <>
                {
                  rates.map(({ amount, type }: rateProps, index: any) => {
                    return (
                      <CostCard amount={amount} type={type} id={index} />
                    )
                  })
                }
              </>
            ) : (
              <EmptyCard />
            )}
          </Grid>
        </Grid>
      </PageWrapper>
    </>
  );
};

export default Home;
