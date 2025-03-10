import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Erreur404 from "./pages/erreur404";
import Contact from "./pages/contact";

const App = () => {
    return (
        <Router basename="/ProjetNono">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Erreur404 />} />
                <Route path="/transfo-avis" element={<Erreur404 />} />
            </Routes>
        </Router>
    );
};

export default App;
