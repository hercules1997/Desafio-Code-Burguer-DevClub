import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./home";
import Requests from "./requests";

function myRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/requests" element={<Requests/>} />
      </Routes>
    </Router>
  );
}

export default myRoutes;
