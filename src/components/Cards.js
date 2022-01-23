import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1> Check out thsese AMAZING Holiday Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/saintmartin.jpg"
              text="Explore the sea’s blue water with infinite blue sky in Saint Martin's Islands"
              label="Luxury"
              path="/Services"
            />
            <CardItem
              src="images/ratargul.jpg"
              text="Spend the night in boats in the swamp forests of Ratargul"
              label="Adventure"
              path="/Services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/sajek.jpg"
              text="Indulge amongst the clouds 2000 feet above sea level in Sajek Valley"
              label="Adventure"
              path="/Services"
            />
            <CardItem
              src="images/bandarban.jpeg"
              text="Explore the hidden waterfall deep inside the Banderban Hill Tracts"
              label="Adventure"
              path="/Services"
            />
            <CardItem
              src="images/sundarban.jpg"
              text="Enjoy the thrilling experience amidst wildlife in the Sundarbans"
              label="Luxury"
              path="/Services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
