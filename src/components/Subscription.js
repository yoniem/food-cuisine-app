import React from "react";
import './Subscription.css'; // Optional: Add custom styles for this component

const Subscription = () => {
  return (
    <div className="subscription-section">
      <h1>Subscription Plans</h1>
      <div className="subscription-plan">
        <h2>Basic Plan</h2>
        <p>Enjoy our basic meal plan at an affordable price.</p>
        <button className="subscribe-button">Subscribe</button>
      </div>
      <div className="subscription-plan">
        <h2>Premium Plan</h2>
        <p>Get access to our premium meal options with additional benefits.</p>
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscription;