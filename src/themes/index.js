import { createTheme } from "@mui/material";

const themeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#d32f2f",
      // light: "#f44336",
      // dark: "#b71c1c",
      // contrastText: "#bdbdbd",
    },
    secondary: {
      main: "#43a047",
      // light: "#66bb6a",
      // dark: "#2e7d32",
      // contrastText: "#bdbdbd",
    },
    text: {
      primary: "#bdbdbd",
    },
  },
};
export const theme = createTheme(themeOptions);
