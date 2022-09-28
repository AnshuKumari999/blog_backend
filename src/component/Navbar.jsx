import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <ul>
          <li>
            <Link style={{ color: "black", textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/bollywood"
            >
              Bollywood
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/technology"
            >
              Technology
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/hollywood"
            >
              Hollywood
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/fitness"
            >
              Fitness
            </Link>
          </li>
          <li>
            <Link style={{ color: "black", textDecoration: "none" }} to="/food">
              Food
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
