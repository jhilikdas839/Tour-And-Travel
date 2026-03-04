import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Destination from "./components/Destination.jsx";
import Blog from "./components/Blog.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx"; 
import Tour from "./components/Tour.jsx"; 

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Destination />
              <Blog />
             
            </>
          }
        />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

         {/* Tour Page */}
         <Route path="/tour" element={<Tour />} />
      </Routes>

       <Footer />
    </>
  );
};

export default App;
