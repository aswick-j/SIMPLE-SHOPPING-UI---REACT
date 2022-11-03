import React from "react";
import "./App.css";

import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
