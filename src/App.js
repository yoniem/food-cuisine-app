import React from "react";
import './App.css';
import Work from './components/Work';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Gourmet Haven</h1>
      </header>
      <Work />
      <Testimonial />
    </div>
  );
}

export default App;