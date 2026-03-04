import React from "react";
import "./Contact.css";
import cnt from "../assets/cnt.png";
const Contact = () => {
  return (
    <div>
      <main className="cnt">
        <section className="cnt-wrap">
          <img className="cnt-img" src={cnt} alt="" />
        </section>

        <section className="contact-wrapper">
      <section className="contact-left">
        <h2>We’re Just a Message Away</h2>
        <p className="contact-subtext">
          Whether you have a question, a wild idea, or just want to say hi — drop us
          a line. Let’s create something amazing together.
        </p>

        <section className="contact-item">
          <span className="contact-icon"><i  className=" icon ri-map-pin-fill"></i></span>
          <p>
            Durgapur Cinema Hall, City Centre, Durgapur - 16 | Newton Sector Market, B-zone, Durgapur - 713205 | Bastin Bazar,Asansol 

          </p>
        </section>

        <section className="contact-item">
          <span className="contact-icon"><i className=" icon ri-phone-fill"></i></span>
          <p>+91 8617398804 | +91 8900761848</p>
        </section>

        <section className="contact-item">
          <span className="contact-icon"><i className=" icon ri-whatsapp-fill"></i></span>
          <p>+91 9233300333 </p>
        </section>

        <section className="contact-item">
          <span className="contact-icon"><i className=" icon ri-mail-fill"></i></span>
          <p>easytripdgpasn@gmail.com</p>
        </section>

       

        
      </section>

      {/* RIGHT SIDE FORM */}
      <section className="contact-form">
        <h3>Send a Message</h3>

        <form>
          <input type="text" className="input-field" placeholder="Full Name" />

          <input type="email" className="input-field" placeholder="Email Address" />

          <section className="phone-row">
            <input type="text" className="phone-code" value="+91" readOnly />
            <input type="text" className="phone-input" placeholder="Phone Number" />
          </section>

          <textarea className="textarea-field" placeholder="Message"></textarea>

          <button className="submit-btn">Submit</button>
        </form>
      </section>
    </section>
      </main>
    </div>
  );
};

export default Contact;
