import { Grid, Typography } from "@mui/material";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Settings from '@mui/icons-material/Settings';
import { useRouter } from "next/router"

const Header = () => {
    const router = useRouter()
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <header>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Typography color="inherit" variant="h5" component="h1">
                            Mpesa Cost Calculator
                        </Typography>
                        <Grid item xs />
                        <Grid item>
                        </Grid>
                        <Grid item>
                            <IconButton color="inherit" sx={{ p: 0.5 }}>
                                <Settings onClick={() => router.push("/settings")} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
                <Tabs value={value} onChange={handleChange} textColor="inherit">
                    <Tab label="SEND/WITHDRAW" onClick={() => router.push("/")} />
                    <Tab label="LIPA NA MPESA" onClick={() => router.push("/lipaNaMpesa")} />
                    <Tab label="OTHERS" onClick={() => router.push("/others")} />
                </Tabs>
            </AppBar>
        </header>
    );
};

export default Header ;