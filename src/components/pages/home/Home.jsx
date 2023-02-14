import React from "react";
import { Container } from "reactstrap";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import About from "../../sections/about/About";
import Skills from "../../sections/skills/Skills";
import HeroSection from "../../sections/herosection/HeroSection";
import Services from "../../sections/services/Services";
import Contact from "../../sections/contact/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <HeroSection />
        <About />
        <Skills />
        <Services />
        <Contact />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
