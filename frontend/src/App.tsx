import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Visualizer } from "./pages/visualizer/Visualizer";
import { createTheme, ThemeProvider } from "@mui/material";
import { Home } from "./pages/home/Home";
import { Browse } from "./pages/browse/Browse";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1280,
      xl: 1600
    }
  },
  typography: {
    allVariants: { color: "rgb(232,226,226)" },
    h1: { fontSize: '3.5rem', },
    h2: { fontSize: '3rem' },
    h3: { fontSize: '2.2rem' },
    body1: { fontSize: '1.1rem' },
    fontFamily: [
      'Lato',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  }
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/visualizer" element={<Visualizer />} />
          <Route path="/visualizer/:id" element={<Visualizer />} />
          <Route path="/browse" element={<Browse/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
