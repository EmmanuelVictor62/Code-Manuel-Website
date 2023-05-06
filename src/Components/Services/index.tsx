import React from "react";

import { ServiceContent } from "../../Utils/constants";
import { Animate } from "../Animate";

import "./_services.scss";

export interface ServicesProps {
  toggle?: boolean;
}

const Services: React.FC<ServicesProps> = ({ toggle }) => {
  return (
    <div className="services" id="services" data-toggle={toggle}>
      <Animate.FadeUp>
        <h1 className="services__heading">
          I've got what you need for your next project
        </h1>
      </Animate.FadeUp>

      <div className="services-container--wrapper">
        {ServiceContent.map((service, index) => {
          return (
            <div key={index + 1} className="services-container-box">
              <Animate.FadeIn>
                <div className="services-container">
                  <div className="services-container__header">
                    <p>{service.title}</p>
                    <div className="services-container__image">
                      <i className={`${service.icon}`}></i>
                    </div>
                  </div>
                  <div className="services-container__description">
                    <ul>
                      {service.description.map((element, index) => {
                        return <li key={index + 1}>{element}</li>;
                      })}
                    </ul>
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                </div>
              </Animate.FadeIn>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
