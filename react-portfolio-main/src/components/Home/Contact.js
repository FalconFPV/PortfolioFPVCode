import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import SocialMedia from "../SocialMedia";
import Animations from "../../Animations";

const Contact = () => {
   const { t } = useTranslation();

   return (
      <Container
         fluid
         className="home-about-section"
         id="contact"
         data-aos="zoom-in"
         data-aos-duration="1000"
      >
         <Container className="home-social-container">
            <Row>
               <Col md={12} className="home-about-social">
                  <h1>{t("get_in_touch")}</h1>
                  <p>{t("contact_message_part1")}</p>
                  <p>{t("contact_message_part2")}</p>
                  <p>
                     <strong>{t("send_message")}</strong>
                  </p>
                  <SocialMedia />
               </Col>
            </Row>
            <Row>
               <div className="cta-btn-container">
                  <div className="cta-btn-div">
                     <a
                        className="cta-btn"
                        href="https://docs.google.com/forms/d/e/1FAIpQLScttTC38g4qO3ZFL5hi9E4DnJXgops8htUur4ebKZJGeaOO_Q/viewform?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <span className="arrow-right">
                           <Animations animationType="rotate-animation">
                              <FaPen style={{ marginRight: "8px" }} />
                           </Animations>
                           {t("message_form")}
                        </span>
                     </a>
                  </div>
               </div>
            </Row>
         </Container>
      </Container>
   );
};

export default Contact;
