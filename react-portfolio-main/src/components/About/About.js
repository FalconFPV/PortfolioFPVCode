import React from "react";
import { Container, Row } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import Services from "./Services";
import OurFleet from "./OurFleet";
import Testimonials from "./Testimonials";

function About() {
  return (
     <Container fluid className="about-section">
        <Row className="about-row">
           <Row className="about">
              <Aboutcard />
              <div
                 className="skill-section-container"
                 id="skills"
                 data-aos="fade-up"
                 data-aos-duration="2000"
              >
                 <Services />
              </div>
              <OurFleet />
              {/* Opiniones */}
              {/* <div
                 className="skill-section-testimonials-container"
                 id="testimonials"
                 data-aos="fade-up"
                 data-aos-duration="2000"
              >
                 <Testimonials />
              </div> */}
           </Row>
        </Row>
     </Container>
  );
}

export default About;
