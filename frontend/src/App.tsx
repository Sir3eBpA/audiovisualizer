import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Visualizer } from "./pages/visualizer/Visualizer";
import { createTheme, ThemeProvider } from "@mui/material";
import { Home } from "./pages/home/Home";
import { Browse } from "./pages/browse/Browse";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
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
