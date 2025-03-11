import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Discover our journey and work process"
            />

            <p>
              Since our inception, our agency has been committed to delivering
              innovative and tailored solutions to meet the evolving needs of
              our clients. We believe in a customer-centric approach, ensuring
              that every project is executed with precision and creativity.
            </p>

            <p>
              Our team of dedicated professionals works collaboratively,
              leveraging expertise in design, development, and strategy to drive
              success. From concept to execution, we focus on delivering
              high-quality results that exceed expectations.
            </p>

            <button className="btn2">More About Us</button>
          </div>
          <div className="right row">
            <img src="./immio.jpg" alt="Our Agency" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
