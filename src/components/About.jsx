import React from "react";
import "./About.css";
import abt from "../assets/abt.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";

const About = () => {
  return (
    <div>
      <main className="abt">
        <section className="abt-wrap">
          <img className="abt-img" src={abt} alt="" />
        </section>

        <section className="abt-head">
          <h2 className="abt-h1"><b>Explore with Easy Trip</b></h2>
          <p className="abt-p">
            Easy Trip brings unforgettable journeys with comfort and
            care. We turn every trip into <br /> a beautiful memory you’ll
            cherish forever.
          </p>
        </section>

        <section className="abt-box1">
          <div className="box1">
            <i className=" icon  ri-ancient-gate-fill"></i>
            <h4 className="card-h4">Travel & Tourism</h4>
            <p className="card-p">
              The idea of setting up Easy Trip was a result of intense
              discussion between the founders on issues being faced by
              travellers while planning a tour, till its execution. The notion
              of being able to provide the best possible solution to the
              discerning traveller, led to the creation of Travelxploria; with
              its plethora of services.
            </p>
          </div>
          <div className="box1">
            <i className=" icon ri-eye-fill"></i>
            <h4 className="card-h4">Sustainable Travel</h4>
            <p className="card-p">
              As we focus on best travel experience in the best value for money
              deal, we aim to make the holiday; not a once in a lifetime moment
              or a once a year moment but in reality an integral part of
              everybody’s life. We want to make the holidays comfortable so that
              a traveller takes an easy to plan, easy to process and easy to
              execute venture.
            </p>
          </div>
          <div className="box1">
            <i className=" icon ri-user-fill"></i>
            <h4 className="card-h4">Premium Services</h4>
            <p className="card-p">
              Our premium service is designed for travelers who expect nothing
              less than the absolute best. From the moment your journey begins,
              we take care of every detail with exceptional attention and
              unmatched professionalism. Enjoy seamless planning, personalized
              support, and world-class comfort crafted to elevate your travel
              experience.
            </p>
          </div>
        </section>

        <section className="abt-choose">
          <h1 className="abt-choose-h1">Why Easy Trip</h1>
          <p className="abt-choose-p">
            Since 2015, <b>Easy Trip</b> has grown from a small travel
            initiative into a trusted, full-service tour agency delivering
            exceptional travel experiences.
          </p>
        </section>

        <section className="abt-box2">
          <div className="box2">
            <i className=" icon2  ri-ancient-gate-fill"></i>
            <h4 className="card-h4">Travel Related Services</h4>
            <p className="card-p">
              We offer a wide range of travel-related services designed to make
              your journey smooth and stress-free. From trip planning and hotel
              bookings to transport arrangements and guided tours, we ensure
              every detail is handled with care for a comfortable travel
              experience.
            </p>
          </div>
          <div className="box2">
            <i className=" icon2 ri-eye-fill"></i>
            <h4 className="card-h4">Our Mission</h4>
            <p className="card-p">
              Our mission is to deliver seamless, memorable, and
              customer-focused travel experiences. We aim to provide reliable
              services, personalized journeys, and exceptional support, ensuring
              every traveler feels valued and cared for from start to finish.
            </p>
          </div>
        </section>

        <section className="abt-box3">
          <div className="box3">
            <img className="abt-img1" src={img7} alt="" />
          </div>
          <div className="box3">
            <img className="abt-img1" src={img8} alt="" />
          </div>

          <div className="box3">
            <img className="abt-img1" src={img9} alt="" />
          </div>
          <div className="box3">
            <img className="abt-img1" src={img10} alt="" />
          </div>

          <div className="box3">
            <img className="abt-img1" src={img11} alt="" />
          </div>
          <div className="box3">
            <img className="abt-img1" src={img12} alt="" />
          </div>
        </section>

        <section className="abt-title">
          <h1 className="title"> Easy Trip</h1>
        </section>

        <section className="usp-section">
          <h2 className="usp-title">Our USP</h2>
          <p className="usp-subtitle">
            We offer fully personalized and hassle-free travel experiences, where every detail—from planning to execution—is handled with expert care, ensuring comfort, trust, and unforgettable memories.
            
            Here’s what sets us apart:
          </p>

          <div className="usp-container">
            <div className="usp-card">
              <span className="usp-icon">🌍</span>
              <h3>Curated Experiences</h3>
              <p>
                Budget-friendly & comprehensive holiday planning designed for
                every traveler.
              </p>
            </div>

            <div className="usp-card">
              <span className="usp-icon">📘</span>
              <h3>Personalized Planning</h3>
              <p>
                Custom itineraries shaped to fit your interests, pace, and
                comfort.
              </p>
            </div>

            <div className="usp-card">
              <span className="usp-icon">📞</span>
              <h3>24/7 Travel Support</h3>
              <p>
                Human support at every stage of your journey—anytime you need.
              </p>
            </div>

            <div className="usp-card">
              <span className="usp-icon">💰</span>
              <h3>Transparent Pricing</h3>
              <p>No hidden charges—just honest & fair pricing.</p>
            </div>

            <div className="usp-card">
              <span className="usp-icon">📍</span>
              <h3>Local Expertise</h3>
              <p>Trips curated by experts who know the destination best.</p>
            </div>

            <div className="usp-card">
              <span className="usp-icon">✈️</span>
              <h3>Unique Destinations</h3>
              <p>Explore beyond tourist spots & discover hidden gems.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
