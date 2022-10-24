import {
    Grid,
    Typography, 
    Button,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Settings from '@mui/icons-material/Settings';
import { useRouter } from "next/router"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import CloseIcon from '@mui/icons-material/Close';
import Switch from '@mui/material/Switch';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const Header = () => {
    const router = useRouter()
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const [checked, setChecked] = React.useState(['theme']);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleToggle = (value: string) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullScreen
            >
                <DialogTitle sx={{ m: 0, p: 2 }} >
                    <Typography variant="h6">Settings</Typography>

                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                        }}
                    >
                        <CloseIcon color="primary" />
                    </IconButton>
                </DialogTitle>
                <ListItem >
                    <ListItemIcon>
                        <DarkModeIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-theme" primary="Theme" />
                    <Switch
                        edge="end"
                        onChange={handleToggle('theme')}
                        checked={checked.indexOf('theme') !== -1}
                        inputProps={{
                            'aria-labelledby': 'switch-list-label-theme',
                        }}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AccountBalanceWalletIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-bluetooth" primary="Currency" />
                    <Box sx={{ minWidth: 70 }}>
                        <FormControl fullWidth>
                            <NativeSelect
                                defaultValue={30}
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value={1}>Ksh</option>
                                <option value={2}>Esh</option>
                                <option value={3}>Tsh</option>
                                <option value={3}>Ush</option>
                            </NativeSelect>
                        </FormControl>
                    </Box>
                </ListItem>
                <DialogActions sx={{ pt: 5 }}>
                    <Button autoFocus variant="outlined" fullWidth onClick={handleClose}>
                        Update
                    </Button>
                </DialogActions>
            </Dialog>

            <header>
                <AppBar color="primary" position="sticky" elevation={0}>
                    <Toolbar>
                        <Grid container spacing={1} alignItems="center">
                            <Typography color="inherit" variant="h5" component="h1" sx={{ fontFamily: "Ubuntu + Fira-Sans" }}>
                                Mpesa Cost Calculator
                            </Typography>
                            <Grid item xs />
                            <Grid item>
                            </Grid>
                            <Grid item>
                                <IconButton color="inherit" sx={{ p: 0.5 }}>
                                    <Settings onClick={handleClickOpen} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
                    <Tabs value={value} onChange={handleChange} textColor="inherit" sx={{ fontFamily: "Ubuntu + Fira-Sans" }}>
                        <Tab label="SEND/WITHDRAW" onClick={() => router.push("/")} />
                        <Tab label="LIPA NA MPESA" onClick={() => router.push("/lipaNaMpesa")} />
                        <Tab label="OTHERS" onClick={() => router.push("/others")} />
                    </Tabs>
                </AppBar>
            </header>
        </>
    );
};

export default Header;