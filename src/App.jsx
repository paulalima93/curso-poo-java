import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Capitulo1 from "./pages/Capitulo1/Capitulo1";
import Capitulo2 from "./pages/Capitulo2/Capitulo2";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: "flex" }}>
        <Sidebar />
        <div className="content" style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/capitulo1" element={<Capitulo1 />} />
            <Route path="/capitulo2" element={<Capitulo2 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
