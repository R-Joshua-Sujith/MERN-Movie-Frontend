import React from "react";
import { Link } from "react-router-dom";
import "./styles/Nav.css";
const Nav = () => {
  return (
    <nav>
      <Link to="/" className="titles ">
        Movies
      </Link>

      <div className="nav2">
        <Link to="/about" className="Child">
          About
        </Link>
        <Link to="/contact" className="Child">
          Contact Us
        </Link>
        <Link to="/menu" className="Menu">
          <div>Menu</div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
