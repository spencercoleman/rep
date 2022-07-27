import { Link } from "react-router-dom";
import StyledSection from "../styles/StyledSection";

const Section = ({ children, title, viewAllLink }) => (
    <StyledSection>
        <div className="section-top">
            <h2 className="section-heading">
                {title}
            </h2>
            {viewAllLink && (
                <Link to={viewAllLink} className="section-view-all">See All</Link>
            )}
        </div>
        <div>
            {children}
        </div>
  </StyledSection>
);

export default Section;