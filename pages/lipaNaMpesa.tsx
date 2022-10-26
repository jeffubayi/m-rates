import Head from "next/head";
import React, { useState, useEffect, useMemo } from "react";
import { FormWrapper, PageWrapper } from "../styles";
import { debounce } from "lodash";
import {
    Grid,
    TextField,
    ListItem,
    ListItemText,
    Paper,
    Typography,
    Button,
    Avatar,
    ListItemAvatar,
    Chip
} from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const LipaNaMpesa = () => {
    //create the state for loading  rates
    const [rates, setRates] = useState([]);
    const [query, setQuery] = useState("");
    const [amount, setAmount] = useState("");
    const [value, setValue] = React.useState('paybill');
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    //handle rate search by name
    const searchRates = async (event: any) => {
        event.preventDefault();
        try {
            const res = await fetch(`/api/lipaNaMpesa?amount=${query}`);
            const rateList = await res.json();
            console.log(`rateList`, rateList.lipaNaMpesa)
            setRates(rateList.lipaNaMpesa);
        } catch (error) {
            error
        }
    };

    //handle text input value change
    const handleChange = (event: any) => {
        setQuery(event.target.value);
    };

    const handleAmountChange = (event: any) => {
        setAmount(event.target.value);
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
                <title>Mpesa | Lipa na mpesa  </title>
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
                                    value={value}
                                    onChange={handleRadioChange}
                                    sx={{ display: "flex", justifyContent: "space-between" }}
                                >
                                    <FormControlLabel value="paybill" control={<Radio />} label="Paybill Number" />
                                    <FormControlLabel value="till" control={<Radio />} label="Till Number" />
                                </RadioGroup>
                            </FormControl>

                        </Grid>

                        {value === "paybill" ? (
                            <>
                                <Grid item xs={12} md={12} >
                                    <FormWrapper component="div">
                                        <TextField
                                            size="small"
                                            label="Pay bill number"
                                            onChange={handleChange}
                                            className="input"
                                            sx={{
                                                borderRadius: "1.5rem",
                                                boxShadow: "rgb(157 168 189 / 10%) 0px 4px 8px",
                                            }}
                                            type="number"
                                            name="query"
                                            placeholder="Enter paybill number..."
                                            fullWidth
                                        />
                                    </FormWrapper>
                                </Grid>
                                <Grid item xs={12} md={12} >
                                    <FormWrapper component="div">
                                        <TextField
                                            size="small"
                                            label="Amount"
                                            onChange={handleAmountChange}
                                            className="input"
                                            sx={{
                                                borderRadius: "1.5rem",
                                                boxShadow: "rgb(157 168 189 / 10%) 0px 4px 8px",
                                            }}
                                            type="number"
                                            name="amount"
                                            placeholder="Enter amount in ksh..."
                                            fullWidth
                                        />
                                    </FormWrapper>

                                </Grid>
                            </>
                        ) : (
                            <>
                                <Grid item xs={12} md={12} >
                                    <FormWrapper component="div">
                                        <TextField
                                            size="small"
                                            label="Till number"
                                            onChange={handleChange}
                                            className="input"
                                            sx={{
                                                borderRadius: "1.5rem",
                                                boxShadow: "rgb(157 168 189 / 10%) 0px 4px 8px",
                                            }}
                                            type="number"
                                            name="query"
                                            placeholder="Enter Merchant till number.."
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

                                </Grid>
                            </>
                        )}
                    </Grid>
                    <Button variant="contained" fullWidth sx={{ color: "ffff", bgColor: "grey", mt: 5 }} onClick={handleClickOpen} >Check transaction cost</Button>
                </Paper >
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullScreen
                >
                    <DialogTitle sx={{ m: 0, p: 2 }} >
                        <Typography variant="h6">Lipa na mpesa</Typography>

                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <List sx={{ pb: 2 }}>
                        <ListItem alignItems="flex-start" secondaryAction={
                            <Chip sx={{ fontWeight: "bold" }} color="primary" label={`cost: ${100}`} />
                        }>
                            <ListItemAvatar>
                                <Avatar alt={value} src="/" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={`${value} #${query} `}
                                secondary={
                                    <React.Fragment>

                                        {`Amount: `}
                                        <Typography
                                            sx={{ display: 'inline', fontWeight: "bold" }}
                                            component="span"
                                            variant="subtitle2"
                                            color="primary"
                                        >
                                            {amount}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                    <DialogActions>
                        <Button autoFocus variant="outlined" fullWidth onClick={handleClose}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </PageWrapper >
        </>
    );
};

export default LipaNaMpesa;