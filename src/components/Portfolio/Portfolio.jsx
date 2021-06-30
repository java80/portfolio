import React from 'react'
import "./Portfolio.scss"
import { featuredPortfolio } from '../../portfolios';
const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>My Portfolio</h1>
      <div className="container">
        {featuredPortfolio.map((porfolio) => {
          return (
            <a target="blank" href={porfolio.projectLink}>
              <div className="item">
                <img src={porfolio.img} alt="" />
                <h3> {porfolio.title}</h3>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio
