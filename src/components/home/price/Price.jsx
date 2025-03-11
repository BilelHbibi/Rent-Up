import React from "react";
import Heading from "../../common/Heading";
import "./price.css";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <>
      <section className="price padding">
        <div className="container">
          <Heading
            title="Choose Your Ideal Package"
            subtitle="Explore our carefully curated packages, designed to meet your needs with quality, reliability, and exceptional value."
          />
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Price;
