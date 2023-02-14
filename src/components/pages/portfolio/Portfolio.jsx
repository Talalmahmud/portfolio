import React, { useState } from "react";
import { Button, Container } from "reactstrap";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import "./portfolio.css";
import portfolioData from "./portfoliodata";
import Card from "./portfoliocard/Card";

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState(portfolioData);
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);
  const [mern, setMern] = useState([]);

  //console.log(portfolioData.filter((data)=> data.type == === "frontend"))

  const handleAll = () => {
    setPortfolios(portfolioData);
    setFrontend(null);
    setBackend(null);
    setMern(null);
  };

  const handleFront = () => {
    setPortfolios(null);
    setFrontend(portfolioData.filter((data) => data.type === "frontend"));
    setBackend(null);
    setMern(null);
  };

  const handleBackend = () => {
    setPortfolios(null);
    setFrontend(null);
    setBackend(portfolioData.filter((data) => data.type === "backend"));
    setMern(null);
  };

  const handleMern = () => {
    setPortfolios(null);
    setFrontend(null);
    setBackend(null);
    setMern(portfolioData.filter((data) => data.type === "mern"));
  };

  return (
    <>
      <Header />
      <Container>
        <div className="portfolio">
          <div className="portfolio__heading">
            <h2>Portfolio</h2>
            <p>Most recent project</p>
          </div>

          <div className="portfolio__btn">
            <Button onClick={handleAll}>All</Button>
            <Button onClick={handleFront}>Frontend</Button>
            <Button onClick={handleBackend}>Backend</Button>
            <Button onClick={handleMern}>MERN</Button>
          </div>
          {portfolios && <Card data={portfolios} />}
          {frontend && <Card data={frontend} />}
          {backend && <Card data={backend} />}
          {mern && <Card data={mern} />}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Portfolio;
