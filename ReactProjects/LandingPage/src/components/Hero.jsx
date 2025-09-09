import React from "react";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Welcome to Spheria</h1>
        <p style={{ color: "white" }}>We help you grow your business with innovative solutions.</p>
        <button className="btn">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="logo.png" alt="Brand" />
      </div>
    </section>
  );
}

export default Hero;
