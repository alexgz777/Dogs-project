import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "../src/components/Landing.jsx";
import Home from "../src/components/Home.jsx";
import Post from "../src/components/Post.jsx";
import Details from "../src/components/Details.jsx";
import Navbar from "../src/components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/post" element={<Post />} />
        <Route path="/home/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
