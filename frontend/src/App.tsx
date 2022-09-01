import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Visualizer } from "./pages/visualizer/Visualizer";
import { ThemeProvider } from "@mui/material";
import { Home } from "./pages/home/Home";
import { Browse } from "./pages/browse/Browse";
import { Page } from "./Constants";
import { darkTheme } from "./themes/DarkTheme";

export const Pages : Page[] = [
  {url: '/', name: "Home"},
  {url: '/browse', name: "Browse"},
  {url: '/visualizer', name: "Create"}
];

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
