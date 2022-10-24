import Head from "next/head";
import { useState, useEffect, useMemo } from "react";
import { FormWrapper, PageWrapper } from "../styles";
import { debounce } from "lodash";
import { Grid } from "@mui/material";
import CostCard from "../components/costCard";
import TextField from "../components/InputField"
import EmptyCard from "../components/emptyCard"

interface rateProps {
  amount: number,
  type: string,
}
const Home = () => {
  //create the state for loading  rates
  const [rates, setRates] = useState([]);
  const [query, setQuery] = useState("");

  //handle rate search by name
  const searchRates = async (event: any) => {
    event.preventDefault();
    try {
      const res = await fetch(`/api/sendAndWithdraw?amount=${query}`);
      const rateList = await res.json();
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
        <link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet'></link>
      </Head>
      <PageWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} sx={{ mx: 1, mt: 1 }}>
            <FormWrapper component="div">
              <TextField
                label="Amount"
                handleChange={handleChange}
                type="number"
                name="query"
                placeholder="Enter amount in ksh..."
              />
            </FormWrapper>
          </Grid>

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
