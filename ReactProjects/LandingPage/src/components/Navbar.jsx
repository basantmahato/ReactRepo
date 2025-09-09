import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Spheria</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
