import { Grid ,Typography} from "@mui/material";
import { Main, Header } from "../styles";
import Image from "next/image";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Settings from '@mui/icons-material/Settings';
import {useRouter} from "next/router"

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  const router = useRouter()
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Main maxWidth="sm" sx={{p:0,mt:0}}>
     <header>
     <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">

            <Typography color="inherit" variant="h5" component="h1">
              Mpesa Rates
            </Typography>
            <Grid item xs />
            <Grid item>
            </Grid>
            <Grid item>
              <IconButton color="inherit" sx={{ p: 0.5 }}>
                <Settings />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
        <Tabs value={value} onChange={handleChange} textColor="inherit">
          <Tab label="SEND/WITHDRAW" onClick={()=>router.push("/")}/>
          <Tab label="LIPA NA MPESA" onClick={()=>router.push("/lipaNaMpesa")} />
          <Tab label="OTHERS" onClick={()=>router.push("/others")} />
        </Tabs>
      </AppBar>
      </header>
      {children}
      <footer
      >
        <Box sx={{ mt: "2rem" }}>
          
        </Box>
      </footer>
    </Main>
  );
};

export default Layout;
