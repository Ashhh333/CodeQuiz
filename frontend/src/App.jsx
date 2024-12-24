
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import AboutPage from "./components/ProblemCreation";
import URL from "./components/link";
import ProblemSolvingPage from "./components/ProblemSolving";
import Judge from "./components/Judge";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/link" element={<URL/>} />
        <Route path="/ProblemSolving" element={<ProblemSolvingPage/>}/>
        <Route path="/Judge" element={<Judge/>}/>
      </Routes>
    </Router>
  );
}

export default App;
