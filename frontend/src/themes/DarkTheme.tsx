import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark"
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 1000,
      lg: 1280,
      xl: 1600
    }
  },
  typography: {
    allVariants: { color: "rgb(232,226,226)" },
    h1: { fontSize: "3.5rem" },
    h2: { fontSize: "3rem" },
    h3: { fontSize: "2.2rem" },
    body1: { fontSize: "1.1rem" },
    fontFamily: [
      "Lato",
      "\"Segoe UI\"",
      "Roboto",
      "\"Helvetica Neue\"",
      "Arial",
      "sans-serif",
      "\"Apple Color Emoji\"",
      "\"Segoe UI Emoji\"",
      "\"Segoe UI Symbol\""
    ].join(",")
  }
});
