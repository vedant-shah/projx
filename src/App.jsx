import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import Home from './pages/Home.js'
import SignUp from './pages/SignUp.js'
import SignIn from './pages/SignIn.js'
import Footer from './components/Footer';
import Projects from './pages/Projects';
import ProjectTasks from './pages/ProjectTasks.js';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:slug" element={<ProjectTasks />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
