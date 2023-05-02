import React from "react";
import './_about.scss';
import myImg from '../../Images/Royal-manuel (1).png'

export interface AboutMeProps{
    name?:string
    toggle?:boolean
}

export const About = (props:AboutMeProps) => {
    return(
        <div 
            className="about" 
            id="about"
            data-toggle={props.toggle}
        >
            <div className="about__image-container">
                <img 
                    src={myImg} 
                    className="about__image"
                />
            </div>
            <div className="about__description-container">
                <p className="about__description-heading">
                    A Bit About Me
                </p>
                <p className="about__description-content">
                    Hi there, I am <strong>Emmanuel Victor</strong>, a highly motivated 
                    frontend developer with 2 years of experience creating 
                    and maintaining high-quality, responsive websites for 
                    various clients.
                </p>
                <p className="about__description-content">
                    I have a strong background in web design, 
                    user experience, and search engine optimization, 
                    and I am passionate about creating visually 
                    appealing and user-friendly websites 
                    optimized for search engines.
                </p>
                <p className="about__description-content">
                    I have a solid understanding of WordPress, HTML, CSS, JavaScript, React.js,
                    React-Redux, Scss, Storybookjs and Typescript.
                </p>
                <p className="about__description-content">
                    I am a team player and I am able to work well under pressure, 
                    always meeting deadlines and producing high-quality work.
                </p>
                <p className="about__description-content">
                    Whether working on a small brochure website or a 
                    large e-commerce platform, I am dedicated to producing high-quality 
                    websites that help my clients achieve their business goals."
                </p>
                <div className="about__button-container">
                    <button 
                        className="about__button--hire"
                        data-toggle={props.toggle}
                    >
                        <a href="#contact">
                            Hire Me
                        </a>
                    </button>
                    <button 
                        className="about__button--download">
                        <a 
                            href="https://drive.google.com/file/d/1IMnCaDChEVahRk5l4DYSEJhYdYI8mLdJ/view?usp=sharing"
                            target={'_blank'}
                            >
                            Download CV
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}