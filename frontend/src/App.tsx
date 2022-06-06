import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Visualizer } from "./pages/Visualizer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="visualizer" element={<Visualizer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
