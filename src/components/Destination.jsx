import React from "react";
import "./destination.css";
import tour2 from "../assets/tour2.png";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
const Destination = () => {
  return (
    <div>
      <main id="Destinations" className="des-main">
        <div className="left-des-img">
          <img src={tour2} alt="" className="des-img" />
        </div>
        <div className="des-info">
          <Link className="des-ex" to="/tour">
            Explore <i className=" explore-icon  ri-compass-discover-line"></i>
          </Link>
          <h4 className="rec">We Recommended</h4>
          <h4 className="rec1">
            Beautiful Destination <br /> Every month
          </h4>
          <p className="des-p">
            Discover new places, new people, and new stories with Easy 
            <br /> Trip — Travel Made Easy.
          </p>
        </div>
      </main>

      <main className="des-gallary">
        <section className="wrap-gallary">
          <h1 className="des2-head">
           <span className="span1"> Find Your </span> Best Destination {" "}
          </h1>
          <p className="gallary-p">
            Easy Trip Your ultimate Tour guide
          </p>
        </section>
        <section className="full-gallary">
          <img
            className="fullimg1"
            src="https://i.pinimg.com/1200x/98/d8/3c/98d83cc43c7d316cfd4401943ce7b907.jpg"
            alt="Thailand"
          />
          <img
            className="fullimg2"
            src="https://i.pinimg.com/1200x/e8/77/db/e877db0ff76c1c66f9f0f7c18004a8a5.jpg"
            alt="Manali"
          />
          <img
            className="fullimg3"
            src="https://i.pinimg.com/736x/29/1f/af/291faf2dfc588064c7c5929f4f3c6b9d.jpg"
            alt="North-Bengal"
          />
          <img
            className="fullimg4"
            src="https://i.pinimg.com/736x/58/1c/f9/581cf95a0d2943b7e49fd6341adcad83.jpg"
            alt="Kashmir"
          />
        </section>

        <section className="voc">
          <h1 className="voc-h1">
          <span className="voc-span">  Best </span> Vacation Plan{" "}
          </h1>
          <p className="voc-p">
            Plan your Perfect vacation with our travel agency
          </p>
          <div className="grid">
            {/* Example grid-item */}
            <div className="grid-item">
              <img
                className="grid-img"
                src={img1}
                alt="Himachal"
              />
            </div>

            {/* Repeat similar for other grid-items */}
            <div className="grid-item">
              <img
                className="grid-img"
                src={img2}
                alt="North-Bengal"
              />
            </div>

            <div className="grid-item">
              <img
                className="grid-img"
                src={img3}
                alt="Bangkok"
              />
            </div>
            {/* Continue same for remaining items */}
            <div className="grid-item">
              <img
                className="grid-img"
                src={img4}
                alt="Kashmir"
              />
            </div>

            <div className="grid-item">
              <img
                className="grid-img"
                src={img5}
                alt="Simla & Manali"
              />
            </div>

            <div className="grid-item">
              <img
                className="grid-img"
                src={img6}
                alt="Phuket & Krabi"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Destination;
