import React from "react";
import { testimonialCardContent } from "../../Utils/constants";
import './_testimonial.scss';

export interface TestimonialProps{
    name?:string
    toggle?:boolean
}

export const Testimonial = (props:TestimonialProps) => {
    return(
        <div 
            className="testimonial"
            data-toggle={props.toggle}
        >
            <h1 className="testimonial__heading">
                Bringing a personal touch
            </h1>
            <div className="testimonial__subheading--container">
                <p className="testimonial__subheading">
                    Building a great website is more than just knowing
                    how to make things look pretty or writing clever codes.
                    I listen to your needs, ensuring you get a product you are happy with, 
                    with codes that both Human and Computer can understand.
                    Listen to the great things others have said.
                </p>
            </div>
            <div className="testimonial-card__wrapper">
                {testimonialCardContent.map((card,index) => {
                    return(
                        <div className="testimonial-card" key={index + 1}>
                            <div className="testimonial-card__description">
                                <i className="fas fa-quote-left quote"></i>
                                <p>{card.content}</p>
                            </div>
                            <div className="testimonial-card__subheading">
                                <p>{card.name}</p>
                                <div 
                                className="testimonial-card__image"
                                style={{backgroundImage:`url(${card.image})`}}
                                ></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}