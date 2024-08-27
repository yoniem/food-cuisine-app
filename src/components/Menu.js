import React from "react";
import './Menu.css'; // Import the new CSS file

const Menu = () => {
  const menuItems = [
    {
      image: "https://via.placeholder.com/150",
      name: "Dish 1",
      description: "Delicious dish 1 description",
      price: "$10.00",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Dish 2",
      description: "Delicious dish 2 description",
      price: "$12.00",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Dish 3",
      description: "Delicious dish 3 description",
      price: "$15.00",
    },
  ];

  return (
    <div className="menu-section">
      <h1>Our Menu</h1>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div className="menu-item" key={item.name}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;