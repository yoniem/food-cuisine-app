import React from "react";
import FoodImage from "../Assets/restaurant.jpg";

const Home = () => {
  return (
    <div className="home-section">
      <img src={FoodImage} alt="Restaurant Food" className="home-image" />
      <div className="home-text">
        <h1>Welcome to Gourmet Haven</h1>
        <p>
          Discover our menu filled with fresh, delicious, and mouth-watering meals, crafted to satisfy your taste buds.
        </p>
        <button className="primary-button">Order Now</button>
      </div>
    </div>
  );
};

export default Home;