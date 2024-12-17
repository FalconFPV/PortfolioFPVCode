import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../components/SocialMedia";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{t("developed_by")}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <SocialMedia /> 
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
