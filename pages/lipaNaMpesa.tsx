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
    Button
} from "@mui/material";
import { StyledRating } from "../styles";
import { green } from "@mui/material/colors";
import CircularProgress from '@mui/material/CircularProgress'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const LipaNaMpesa = () => {
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
                <Paper
                    sx={{
                        borderRadius: "0.5rem",
                        boxShadow: "rgb(157 168 189 / 10%) 0px 4px 8px",
                        justifyContent: "center",
                        p: 2, m: 2
                    }}>
                    <Grid container spacing={4}>

                        <Grid item xs={12} md={12} >
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="paybill" control={<Radio />} label="Paybill Number" />
                                    <FormControlLabel value="till" control={<Radio />} label="Till Number" />
                                </RadioGroup>
                            </FormControl>

                        </Grid>

                        <Grid item xs={12} md={12} >
                            <FormWrapper component="div">
                                <TextField
                                    size="small"
                                    label="Paybill"
                                    onChange={handleChange}
                                    className="input"
                                    sx={{
                                        borderRadius: "1.5rem",
                                        boxShadow: "rgb(157 168 189 / 10%) 0px 4px 8px",
                                    }}
                                    type="number"
                                    name="query"
                                    placeholder="Paybill number..."
                                    fullWidth
                                />
                            </FormWrapper>
                        </Grid>
                        <Grid item xs={12} md={12} >
                            <FormWrapper component="div">
                                <TextField
                                    size="small"
                                    label="Amount"
                                    onChange={handleChange}
                                    className="input"
                                    sx={{
                                        borderRadius: "1.5rem",
                                        boxShadow: "rgb(157 168 189 / 10%) 0px 4px 8px",
                                    }}
                                    type="number"
                                    name="query"
                                    placeholder="Enter amount in ksh..."
                                    fullWidth
                                />
                            </FormWrapper>
                            <Grid item xs={12} md={12} mt={3} justifyContent="center" >
                                <Button variant="contained" color="secondary">Check transaction cost</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper >
            </PageWrapper >
        </>
    );
};

export default LipaNaMpesa;