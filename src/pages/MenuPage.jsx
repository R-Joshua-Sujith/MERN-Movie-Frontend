import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/MenuPage.css";
const MenuPage = () => {
  return (
    <div>
      <h2>Menu</h2>
      <div className="menu">
        <Link to="/" className="item">
          Movies
        </Link>
        <Link to="/about" className="item">
          About Us
        </Link>
        <Link to="/contact" className="item">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default MenuPage;
