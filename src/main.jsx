import React from "react";
import { Routes, Route } from "react-router-dom";

// Import all views
import BaseLayout from "./views/BaseLayout";
import Home from "./views/Home";
import About from "./views/About";
import AvailableCats from "./views/AvailableCats";
import Contact from "./views/Contact";

function App() {
  return (
    <Routes>
      {/* BaseLayout wraps all routes */}
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/available-cats" element={<AvailableCats />} />
        <Route path="/contact" element={<Contact />} />
        {/* Optional fallback route */}
        <Route path="*" element={<h2 className="text-center mt-5">Page Not Found</h2>} />
      </Route>
    </Routes>
  );
}

export default App;
