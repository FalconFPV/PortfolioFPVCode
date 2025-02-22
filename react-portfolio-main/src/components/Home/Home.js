import React, { useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import TypeWriter from "./TypeWriter";
import About from "../About/About";
import { FaArrowDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Animations from "../../Animations";
import video from "../../Assets/Video2.mp4"; // Importa el archivo de video
import Contact from "./Contact";

function Home() {
   const { t } = useTranslation();
   
     const videoRef = useRef(null);

     useEffect(() => {
        const timeout = setTimeout(() => {
           if (videoRef.current) {
              videoRef.current.play(); // Reproducir el video después de X segundos
           }
        }, 1200); 

        return () => clearTimeout(timeout); // Limpiar el timeout al desmontar el componente
     }, []);
   
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
                       src={video}
                       muted
                       playsInline
                       loop
                       ref={videoRef} // Referencia al elemento <video>
                    ></video>
                 </div>
                 <div className="home-header">
                    <div className="home-first">
                       <h1 style={{ paddingBottom: 15 }} className="heading">
                          {t("welcome")}{" "}
                       </h1>

                       <h1 className="heading-name">
                          {t("intro")}
                          <strong className="main-name"> {t("name")}</strong>
                       </h1>
                       <div className="heading-type">
                          <TypeWriter />
                       </div>
                       <div className="show-work">
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
              </Row>
           </Row>
        </Container>
        <Container fluid className="home-about-section" id="about">
           <Row className="about">
              <About />
           </Row>
        </Container>
        <Contact />
     </section>
  );
}

export default Home;
