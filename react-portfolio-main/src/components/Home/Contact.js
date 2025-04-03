import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import SocialMedia from "../SocialMedia";
import Animations from "../../Animations";
import ContactForm from "../ContactForm";

const Contact = () => {
   const { t } = useTranslation();

   return (
      <Container fluid className="home-about-section" id="contact">
         <Container
            className="home-social-container"
            data-aos="zoom-in"
            data-aos-duration="1000"
         >
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
         </Container>
         <Container id="contact-container">
            <ContactForm />
         </Container>
      </Container>
   );
};

export default Contact;
