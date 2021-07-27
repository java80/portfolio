import React from 'react'
import "./Portfolio.scss"
import { featuredPortfolio } from '../../portfolios';
const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>My Portfolio</h1>
      <div className="container">
        {featuredPortfolio.map((porfolio,index) => {
          return (
            <a key={index} target="blank" href={porfolio.projectLink}>
              <div className="item">
                <img src={porfolio.img} alt="" />
                <h3> {porfolio.title}</h3>
                <p> {porfolio.projectDescription}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio
