import React from "react";
import { flipBoxContent } from "../../Utils/constants";
import "./_portfolio.scss";

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1 className="portfolio__heading">
        Let the Projects Speak for themselves
      </h1>
      <div className="portfolio__flip-box-container">
        {flipBoxContent.map((flipBox, index) => {
          return (
            <div className="portfolio__flip-box" key={index + 1}>
              <div className="portfolio__flip-box--inner">
                {/* <div 
                                    // style={{backgroundImage:`url(${flipBox.img})`}} 
                                    className="portfolio__flip-box--front"
                                ></div> */}
                <div className="portfolio__flip-box--front">
                  <img
                    src={`${flipBox.img}`}
                    loading="lazy"
                    alt={`${flipBox.img}`}
                    className="portfolio__flip-box--front-image"
                    style={{
                      height: flipBox.height,
                      // width: flipBox.width,
                    }}
                  />
                </div>
                <div className="portfolio__flip-box--back">
                  <div className="portfolio__flip-box--header">
                    <button>
                      <a href={flipBox.link} target="_blank">
                        <i className="fa-regular fa-folder fa-1x"></i>
                      </a>
                    </button>

                    <div className="portfolio__flip-box--header-row">
                      <button>
                        <a href={flipBox.githubLink} target="_blank">
                          <i className="fa brands fa-github"></i>
                        </a>
                      </button>
                      <button>
                        <a href={flipBox.link} target="_blank">
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                      </button>
                    </div>
                  </div>

                  <p className="portfolio__flip-box--heading">
                    {flipBox.heading}
                  </p>
                  <p className="portfolio__flip-box--description">
                    {flipBox.description}
                  </p>

                  <ul className="portfolio__flip-box-footer">
                    {flipBox.skills?.map((skill, index) => {
                      return <li key={index + 1}>{skill}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
