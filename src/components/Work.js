import React from "react";
import { Link } from "react-router-dom";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Choose from our curated selection of fresh and delicious meals.",
      link: "/menu", // Add links to pages or external URLs
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Decide how often you want to enjoy our meals, be it daily or weekly.",
      link: "/subscription", // Add links to pages or external URLs
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "We ensure your meals are delivered hot and on time, every time.",
      link: "/delivery", // Add links to pages or external URLs
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          We deliver fresh, delicious meals straight to your door in a few simple steps.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <Link to={data.link} key={data.title} className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;