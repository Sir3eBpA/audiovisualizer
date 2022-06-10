import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Visualizer } from "./pages/Visualizer";
import { createTheme, ThemeProvider } from "@mui/material";

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
          <Route path="visualizer" element={<Visualizer />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
