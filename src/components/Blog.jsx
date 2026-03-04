import React from "react";
import "./Blog.css";
import testimonial from "../assets/testimonial.png";

const Blog = () => {
  return (
    <div>
      <main className="blog-main">
        <h1 className="blog-h1">
        <span className="span-blog">  Our </span> Client  says
        </h1>
        <p className="blog-p">
          An amazing travel experience! Easy Trip made our trip smooth,
          memorable, and full of joy
        </p>
        <section className="testimonial">
          <img className="test-img" src={testimonial} alt="" srcset="" />
          <section className="test-right">
            <h3 className="tes-head">Love By clients</h3>
            <p className="tes-p">
              Our experience with Easy Trip was absolutely wonderful!
              From planning to execution, everything was perfectly managed.The
              team was supportive, friendly, and made sure our trip was
              completely hassle-free. Every moment was memorable — from cozy
              stays to breathtaking destinations We can’t wait to plan our next
              vacation with them again
            </p>
          </section>
        </section>
      </main>
    </div>
  );
};
export default Blog;
