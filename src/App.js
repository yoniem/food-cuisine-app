import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Testimonial from './components/Testimonial';
import Menu from './components/Menu';
import Subscription from './components/Subscription';
import Delivery from './components/Delivery';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Work />} />
          <Route path="/testimonials" element={<Testimonial />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;