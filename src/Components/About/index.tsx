import React from "react";
import "./_about.scss";
import myImg from "../../Images/Royal-manuel (1).png";

export interface AboutMeProps {
  name?: string;
  toggle?: boolean;
}

const About: React.FC<AboutMeProps> = ({ toggle }) => {
  return (
    <div className="about" id="about" data-toggle={toggle}>
      <div className="about__image-container">
        <img src={myImg} className="about__image" alt="" />
      </div>

      <div className="about__description-container">
        <p className="about__description-heading">A Bit About Me</p>
        <p className="about__description-content">
          Hello there!, I am <strong>Emmanuel Victor</strong>, I am a React
          developer with two years of experience working in the web development
          industry.
        </p>
        <p className="about__description-content">
          My expertise includes React, TypeScript, GraphQL, Next.js, Redux,
          StorybookJS,Vanilla SCSS and WordPress. During my time at
          CreativeMinds Company, I worked as a Junior Developer where I gained
          valuable experience in building scalable and efficient web
          applications.
        </p>
        <p className="about__description-content">
          My passion for coding and problem-solving drives me to constantly
          learn and stay up-to-date with the latest technologies and trends in
          the industry.
        </p>
        <p className="about__description-content">
          With my strong technical skills and ability to work collaboratively in
          a team, I am confident in my ability to deliver high-quality projects
          that meet the needs and exceed the expectations of clients.
        </p>
        <p className="about__description-content">
          Thank you for taking the time to visit my page, and I look forward to
          connecting with you soon!
        </p>
        <div className="about__button-container">
          <button className="about__button--hire" data-toggle={toggle}>
            <a href="#contact">Hire Me</a>
          </button>
          <button className="about__button--download">
            <a
              href="https://drive.google.com/file/d/1RJ1T8p6ag-Hz-YvroDTMPev_xESuNDK5/view?usp=sharing"
              target={"_blank"}
              rel="noreferrer"
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
