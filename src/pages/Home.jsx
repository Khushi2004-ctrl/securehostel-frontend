import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar openLogin={() => setShowLogin(true)} />

      <section className="hero-section">
        <Hero openLogin={() => setShowLogin(true)} />
      </section>

      <section className="features-section">
        <Features openLogin={() => setShowLogin(true)} />
      </section>

      <footer className="footer-section">
        <Footer />
      </footer>

      <LoginModal show={showLogin} close={() => setShowLogin(false)} />
    </>
  );
};

export default Home;
