import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>VACATION AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonSize="btn--large"
          buttonStyles="btn--outline"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
