import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";

import { Home, About } from "./pages";

const App = () => {
  return (
    <Router>
      {/* <Sidebar />
      <Top /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
