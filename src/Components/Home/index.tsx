import React from "react";
import './_home.scss';
import { Typewriter } from 'react-simple-typewriter';

export interface HomeProps{
    toggle?:boolean
}

export const Home = (props:HomeProps) => {
    return(
        <div className="home-page__container" id="home">
            <p className="home-page__heading">
                
                <span data-toggle={props.toggle}>
                    <Typewriter 
                        words={[
                            'Hello, I am Emmanuel',
                            'A Frontend Developer',
                            'And An App Developer'
                        ]}
                        loop={false}
                        cursor
                        cursorStyle='|'
                        typeSpeed={180}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    />
                </span>
            </p>
            <p className="home-page__description">
                A Frontend Developer with 2 years of experience 
                building and maintaining web applications using 
                technologies such as HTML, CSS, React and Vue.
            </p>
            <div className="home-page__button-box">
                <button className="home-page__button">
                    <a href="#contact">
                    Start a project
                    </a>  
                </button>
                <a 
                    href="mailto:royalmanuel62@gmail.com" 
                    className="home-page__link"
                >
                    royalmanuel62@gmail.com
                </a>
            </div>
        </div>
    )
}

export default Home;