import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Users from "./components/Users";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes> { }
                    <Route path="/about" element={<About />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;