import { testimonialCardContent } from "../../Utils/constants";
import "./_testimonial.scss";

export interface TestimonialProps {
  toggle?: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ toggle }) => {
  return (
    <div className="testimonial" data-toggle={toggle}>
      <h1 className="testimonial__heading">Bringing a personal touch</h1>
      <div className="testimonial__subheading--container">
        <p className="testimonial__subheading">
          With a passion for frontend development, I continuously improve my
          skills to take on new challenges. My dedication to open communication
          and collaboration ensures client satisfaction, delivering projects
          that exceed expectations. Hear what others have said.
        </p>
      </div>
      <div className="testimonial-card-wrapper">
        {testimonialCardContent.map((card, index) => {
          return (
            <div className="testimonial-card" key={index + 1}>
              <div className="testimonial-card-header">
                <i className="fas fa-quote-left quote"></i>
              </div>
              <p className="testimonial-card-content">{`"${card.content}"`}</p>

              <div className="testimonial-card-footer">
                <button className="testimonial-card-footer-button">
                  <a href={card.githubLink} target="_blank">
                    {card.image ? (
                      <img src={`${card.image}`} alt={card.image} />
                    ) : (
                      <i className="fa-solid fa-user-tie"></i>
                    )}
                  </a>
                </button>

                <div className="testimonial-card-footer-name-box">
                  <a
                    href={card.githubLink}
                    target="_blank"
                    className="testimonial-card-footer-name"
                  >
                    {card.name}
                  </a>
                  <p className="testimonial-card-footer-name-description">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
