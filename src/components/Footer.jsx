import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <main id="Contact" className="footer">
        <img className="footer-logo" src={logo} alt="" />

        {/* Quick Links */}
        <section className="Quick-links">
          <Link className="link" to="/"><b>Home</b></Link>
          <Link className="link" to="/tour"><b>Tours</b></Link>
          <Link className="link" to="/about"><b>About</b></Link>
          <Link className="link" to="/contact"><b>Contact</b></Link>
        </section>

        {/* Contact Info */}
        <section className="Footer-contact">
          <h1 className="footer-ph">
            <i className="ri-phone-fill"></i> +91 9233300333 |+91 8617398804 | <br></br> 
            +91 8900761848
          </h1>
          <h2 className="footer-mail">
            <i className="ri-mail-fill"></i> easytripdgpasn@gmail.com
          </h2>
        </section>

        {/* Social Media Icons */}
        <section className="Footer-icons">
          <h4 className="title-icon">Social Media</h4>
          <section className="wrap-icon-footer">
            {/* FaceBook Link */}
            <a className="footer-hyperlink" href="https://www.facebook.com/share/1DSETpdJEr/"><i className="ri-facebook-circle-fill"></i></a>
             {/* Instagram Link */}
            <a className="footer-hyperlink" href="https://www.instagram.com/easytrip.official?igsh=cW9ndDljeGp3aDJh"><i className="ri-instagram-fill"></i></a>
            {/* Youtube Link */}
           <a className="footer-hyperlink" href="https://youtube.com/@easytriptourstravels?si=0oGV42ince0L3fXW"> <i className="ri-youtube-fill"></i></a>
            {/* Linkedin Link */}
            <a className="footer-hyperlink" href="https://www.linkedin.com/company/easy-trip-tour-travels/"><i className="ri-linkedin-box-fill"></i></a>
          </section>
        </section>
      </main>

      {/* Copyright Section */}
      <section className="footer-copy">
        <p>© 2026 Easy Trip. All Rights Reserved. Developed By Cyption</p>
      </section>
    </div>
  );
};

export default Footer;
