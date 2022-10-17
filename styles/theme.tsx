import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#28a745",
      dark: "#7A8C99",
      contrastText: "#fff",
    },
    secondary: {
      light: "#fff",
      main: "#808080",
      dark: "yellow",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: [
      'Ubuntu',
      'Fira-Sans',
    ].join(','),
  }
});
