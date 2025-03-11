import React from "react";
import Heading from "../../common/Heading";
import { location } from "../../data/Data";
import "./style.css";

const Location = () => {
  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading
            title="Explore Properties by Location"
            subtitle="Find your ideal home in the perfect location with our curated selection of properties in top areas."
          />

          <div className="content grid3 mtop">
            {location.map((item, index) => (
              <div className="box" key={index}>
                <img src={item.cover} alt="" />
                <div className="overlay">
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
