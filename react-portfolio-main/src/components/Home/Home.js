import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Card from "react-bootstrap/Card";
import { FaArrowDown, FaPen } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Animations from "../../Animations";
import video from "../../Assets/Video.mp4"; // Importa el archivo de video

function Home() {
   const { t } = useTranslation();
  return (
     <section>
        <Container fluid className="home-section" id="home">
           <Row className="home-content">
              <Row className="home-row">
                 <div className="video-background">
                    {/* <div id="player" className="y-video"></div> */}
                    <video
                       id="player"
                       className="y-video"
                       src={video} // Usa la variable importada
                       autoPlay
                       muted
                       loop
                    ></video>
                 </div>
                 <div className="home-header">
                    <div className="home-first">
                       <h1 style={{ paddingBottom: 15 }} className="heading">
                          {t("welcome")}{" "}
                          <span
                             className="wave"
                             role="img"
                             aria-labelledby="wave"
                          >
                             {t("handshake")}
                          </span>
                       </h1>

                       <h1 className="heading-name">
                          {t("intro")}
                          <strong className="main-name"> {t("name")}</strong>
                       </h1>
                       <div className="heading-type">
                          <TypeWriter />
                       </div>
                       <div className="show-work" id="xl">
                          <a href="#about">
                             <span className="show-work-text">
                                {t("view_work")}
                                <Animations animationType="shake-animation">
                                   <FaArrowDown style={{ marginLeft: "8px" }} />
                                </Animations>
                             </span>
                          </a>
                       </div>
                    </div>
                 </div>
                 <div className="show-work" id="xs">
                    <a href="#about">
                       <span className="show-work-text">
                          {t("view_work")}
                          <FaArrowDown style={{ marginLeft: "8px" }} />
                       </span>
                    </a>
                 </div>
              </Row>
           </Row>
        </Container>
        <Container fluid className="home-about-section" id="about">
           <Row className="about">
              <About />
           </Row>
        </Container>
        {/* <Container fluid className="home-about-section" id="about">
           <Row className="about" id="projects">
              <Card className="quote-card-view">
                 <Projects />
              </Card>
           </Row>
        </Container> */}
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
                    <p>
                       {" "}
                       {t("contact_message")}
                       <br />
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
     </section>
  );
}

export default Home;
