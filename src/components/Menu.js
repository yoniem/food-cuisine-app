import React, { useEffect, useState } from "react";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        const menuItems = data.slice(0, 10).map(post => ({
          id: post.id,
          name: `Dish ${post.id}`,
          description: post.body.substring(0, 50),
          price: (post.id * 1.5).toFixed(2)
        }));
        setMenuItems(menuItems);
      });
  }, []);

  return (
    <div className="menu-section">
      <h1>Menu</h1>
      <div className="menu-items">
        {menuItems.map(item => (
          <div className="menu-item" key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="price">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;