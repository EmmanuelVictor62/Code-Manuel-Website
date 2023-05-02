import React from "react";
import { flipBoxContent } from "../../Utils/constants";
import './_portfolio.scss';

export const Portfolio = () => {
    return(
        <div 
            className="portfolio"
            id="portfolio"
        >
            <h1 className="portfolio__heading">
                Let the Projects Speak for themselves
            </h1>
            <div className="portfolio__flip-box-container">
                {flipBoxContent.map((flipBox,index) => {
                    return(
                        <div className="portfolio__flip-box" key={index + 1}>
                            <div className="portfolio__flip-box--inner">
                                {/* <div 
                                    // style={{backgroundImage:`url(${flipBox.img})`}} 
                                    className="portfolio__flip-box--front"
                                ></div> */}
                                <div className="portfolio__flip-box--front">
                                    <img 
                                        src={`${flipBox.img}`}
                                        loading='lazy'
                                        className='portfolio__flip-box--front-image'
                                        style={{
                                            height:flipBox.height,
                                            width:flipBox.width
                                        }}
                                    />
                                </div>
                                <div className="portfolio__flip-box--back">
                                    <p className="portfolio__flip-box--heading">
                                        {flipBox.heading}
                                    </p>
                                    <p className="portfolio__flip-box--description">
                                        {flipBox.description}
                                    </p>
                                    <div>
                                        <button className="portfolio__flip-box--button">
                                            <a href={flipBox.githubLink} target='_blank'>
                                                View GitHub File
                                            </a>
                                        </button>
                                        <button className="portfolio__flip-box--button">
                                            <a href={flipBox.link} target='_blank'>
                                                View Design
                                            </a>
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}