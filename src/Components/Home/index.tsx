import React from "react";
import "./_home.scss";
import { Typewriter } from "react-simple-typewriter";
export interface HomeProps {
  toggle?: boolean;
}

const Home: React.FC<HomeProps> = ({ toggle }) => {
  return (
    <div className="home-page__container" id="home">
      <div className="home-page__background"></div>

      <p className="home-page__heading">
        <span data-toggle={toggle}>
          <Typewriter
            words={[
              "Hello, I am Emmanuel",
              "A Frontend Developer",
              "With Expertise in React",
            ]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={180}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </span>
      </p>
      <p className="home-page__description">
        A Frontend Developer proficient in React and TypeScript, with expertise
        in creating reusable components, optimizing performance, and integrating
        with APIs to deliver robust applications.
      </p>
      <div className="home-page__button-box">
        <button className="home-page__button">
          <a href="#contact">Start a project</a>
        </button>
        <a href="mailto:royalmanuel62@gmail.com" className="home-page__link">
          royalmanuel62@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Home;
