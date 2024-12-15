import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import SkillsSection from "./SkillSection";

function About() {
  return (
     <Container fluid className="about-section">
        <Row className="about-row">
           {/* <Row className="img-about"></Row> */}
           <Row className="about">
              <Aboutcard />
              <div className="skill-section-container" id="skills">
                 <SkillsSection />
              </div>
           </Row>
        </Row>
     </Container>
  );
}

export default About;
