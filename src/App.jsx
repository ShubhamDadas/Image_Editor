import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CropPage from "./components/CropPage";
import ResizePage from "./components/ResizePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Route for Crop Page */}
        <Route path="/crop" element={<CropPage />} />

        {/* Route for Resize Page */}
        <Route path="/resize" element={<ResizePage />} />
      </Routes>
    </Router>
  );
}

export default App;
