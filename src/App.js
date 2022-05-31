import React from "react";
import { Routes, Route } from "react-router-dom";
import { 
  Home, 
  About,
  Services,
  CompanyHistory,
  CompanyLocation,
  Events, 
  Contact, 
  Whoops404 } from "./pages"

function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path="services" element={<Services />} />
          <Route path="history" element={<CompanyHistory />} />
          <Route path="location" element={<CompanyLocation />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;