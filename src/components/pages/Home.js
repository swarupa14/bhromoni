import React, { Fragment } from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";

function Home() {
  return (
    <Fragment>
      <HeroSection />
      <Cards />
      <Footer />
    </Fragment>
  );
}

export default Home;
