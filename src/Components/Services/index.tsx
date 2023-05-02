import React from "react";
import { ServiceContent } from "../../Utils/constants";
import './_services.scss';

export interface ServicesProps{
    toggle?:boolean
}

export const Services = (props:ServicesProps) => {
    return(
        <div 
            className="services" 
            id="services"
            data-toggle={props.toggle}
        >
            <h1 className='services__heading'>
                I've got what you need for your next project
            </h1>
            <div className="services-container--wrapper">
                {ServiceContent.map((service,index) => {
                    return(
                        <div className="services-container" key={index + 1}>
                            <div className="services-container__header">
                                <p>{service.title}</p>
                                <div className="services-container__image">
                                    <i className={`${service.icon}`}></i>
                                </div>
                            </div>
                            <div className="services-container__description">
                                {service.description}
                                <i className="fa-solid fa-quote-right"></i>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}