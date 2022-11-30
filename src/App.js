import React from "react";
import Home from "./peach/Home";
import About from "./peach/About";
import Contact from "./peach/Contact";
import Portfolio from "./peach/Portfolio";
import Skills from "./peach/Skills";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Skills" element={<Skills/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
