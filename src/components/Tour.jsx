import React from "react";
import "./Tour.css";

const tours = [
  {
    img: "https://img.freepik.com/free-photo/woman-wearing-hill-tribe-dress-strawberry-garden-doi-ang-khang-chiang-mai-thailand_335224-764.jpg?t=st=1772637156~exp=1772640756~hmac=feeb5ea3633185469efc9e8af0b131ecf4c400c1ad515f1de89b0d8bc7a998b8&w=2000",
    name: "Darjeeling",
    days: "4 Days / 3 Nights",
    // date: "1st January 2026",
    // price: "₹10,000",
    location: "India"
  },
  {
    img: "https://img.freepik.com/free-photo/ulsan-bawi-rock-seoraksan-mountains-winter-south-korea_335224-287.jpg?t=st=1772637397~exp=1772640997~hmac=b6ea8a237abd1a9b4a1b8b899da81e396111980ebbb8f9f893235a3da847ba1f&w=2000",
    name: "Simla-Manali",
    days: "6 Days / 5 Nights",
    // date: "3rd January 2026",
    // price: "₹12,000",
    location: "India"
  },
  {
    img: "https://i.pinimg.com/736x/3f/9c/eb/3f9ceb358b87ec5a5ecae939178096ef.jpg",
    name: "kashmir",
    days: "6 Days / 5 Nights",
    // date: "5th January 2026",
    // price: "₹8,000",
    location: "India"
  },
  {
    img: "https://i.pinimg.com/1200x/d1/80/95/d18095e2d4de3ab6737d028f4e1484ed.jpg",
    name: "Goa",
    days: "5 Days / 4 Nights",
    // date: "8th January 2026",
    // price: "₹15,000",
    location: "India"
  },
  {
    img: "https://img.freepik.com/free-photo/landmark-pagoda-doi-inthanon-national-park-chiang-mai-thailand_335224-779.jpg?t=st=1772638255~exp=1772641855~hmac=27ebca9c25eee200b3676f1849e598c7eb6be31388ec5971d98a687853dc67a6&w=2000",
    name: "Thailand",
    days: "5 Days / 4 Nights",
    // date: "10th January 2026",
    // price: "₹14,000",
    location: "Thailand"
  },
  {
    img: "https://img.freepik.com/free-photo/young-woman-hiker-taking-photo-with-smartphone-mountains-peak-winter_335224-427.jpg?uid=R199570397&ga=GA1.1.997106049.1740116224&semt=ais_hybrid&w=740&q=80",
    name: "North-Sikkim",
    days: "5 Days / 4 Nights",
    // date: "12th January 2026",
    // price: "₹9,000",
    location: "India"
  }
];

const Tour = () => {
  return (
    <section className="tour-page">
      <h1 className="tour-heading">Our Tours</h1>
      <p className="tour-intro">
        Choose from our handpicked tour packages and explore beautiful destinations.
      </p>

      <section className="tour-grid">
        {tours.map((tour, index) => (
          <section className="tour-card" key={index}>
            <img src={tour.img} alt={tour.name} className="tour-img" />

            <section className="tour-content">
              <h2 className="tour-title">{tour.name}</h2>

              <p className="tour-detail"><i className="ri-map-pin-line"></i> {tour.location}</p>
              <p className="tour-detail"><i className="ri-time-line"></i> {tour.days}</p>
              {/* <p className="tour-detail"><i className="ri-calendar-line"></i> {tour.date}</p>
              <p className="tour-price">{tour.price}</p> */}

              <button 
                className="tour-btn"
                onClick={() =>
                  window.open(
                    "https://wa.me/+919233300333?text=Hello,%20I%20want%20to%20book%20the%20" + tour.name + "%20tour",
                    "_blank"
                  )
                }
              >
                Book Now
              </button>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Tour;
