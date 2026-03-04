import React from "react";
import "./Hero.css";
import tour from "../assets/tour.png";
const Hero = () => {
  return (
    <div>
      <main id="Home" className="main-hero">
        <section className="left">
          <h2 className="left-h2">
            Travel Memories <br />
            You'll Never Forget
          </h2>
          <p>
            Easy Trip – your travel partner for unforgettable journeys.
            From hills to beaches, we craft perfect trips filled with comfort,
            adventure, and memories.
          </p>

          <button
            className="main-ex-btn"
            onClick={() =>
              window.open(
                "https://wa.me/+919233300333?text=Hello%20I%20am%20interested%20in%20your%20tour%20packages",
                "_blank"
              )
            }
          >
            Enquiry
          </button>
          
        </section>
        <section className="right">
          <img src={tour} alt="" />
        </section>
      </main>
    </div>
  );
};

export default Hero;
