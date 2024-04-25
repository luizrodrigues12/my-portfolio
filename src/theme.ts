import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#4f8e3e",
    },
  },
  typography: {
    h1: {
      fontSize: "4em",
      "@media (min-width:300px)": {
        fontSize: "3em",
      },
      "@media (min-width:600px)": {
        fontSize: "4em",
      },
    },
    h2: {
      "@media (min-width:300px)": {
        fontSize: "2em",
      },
      "@media (min-width:600px)": {
        fontSize: "3em",
      },
    },
    fontFamily: "Segoe UI",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
