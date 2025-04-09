import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../components/SocialMedia";
import { useTranslation } from "react-i18next";
import aesa from "../Assets/AESA_Logo.png";
import gobesp from "../Assets/gobesp.png";
import easa from "../Assets/EASA_Logo.png";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();
  
  let date = new Date();
  let year = date.getFullYear();
  return (
     <Container fluid className="footer">
        <Row>
           <Col md="6" className="footer-copywright">
              <h2>{t("aesa")}</h2>
              <div className="aesa">
                 <img className="aesa-logos" src={aesa} alt="AESA logo" />
                 <img
                    className="aesa-logos"
                    src={gobesp}
                    alt="Gobierno de España logo"
                 />
                 <img className="aesa-logos" src={easa} alt="EASA logo" />
              </div>
           </Col>
           <Col md="3" className="footer-body">
              <h2>{t("social_media")}</h2>
              <SocialMedia />
           </Col>
           <Col md="3" className="footer-body">
              <h2>{t("contact")}</h2>
              <div className="contact-info-footer">
                 <MdEmail />
                 <p>joan.falconfpv@gmail.com</p>
              </div>
              <div className="contact-info-footer">
                 <MdPhone />
                 <p>+34 615 159 344</p>
              </div>
           </Col>
        </Row>
        <Row>
           <Col md="6" className="footer-terms">
              <p>
                 {t("developed_by")} | Copyright © {year}
              </p>
           </Col>
           <Col md="6" className="footer-terms">
              <p>
                 <Link to="/conditions">{t("terms_and_conditions")}</Link> |{" "}
                 <Link to="/policy">{t("privacy_policy")}</Link>
              </p>
           </Col>
        </Row>
     </Container>
  );
}

export default Footer;
