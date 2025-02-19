import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
import About from "../About/About";
import { FaArrowDown, FaPen } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Animations from "../../Animations";
import video from "../../Assets/Video2.mp4"; // Importa el archivo de video
import Contact from "./Contact";

function Home() {
   const { t } = useTranslation();
/*
        useEffect(() => {
           // Cargar la API de IFrame de YouTube
           const tag = document.createElement("script");
           tag.src = "https://www.youtube.com/iframe_api";
           const firstScriptTag = document.getElementsByTagName("script")[0];
           firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
           // Configurar el reproductor de YouTube
           window.onYouTubeIframeAPIReady = () => {
              new window.YT.Player("player", {
                 videoId: "s9n47lkKqVk", // Reemplaza con tu ID de video
                 playerVars: {
                    autoplay: 1,
                    mute: 1,
                    start: 0,
                    end: 100, // 2 minutos
                    loop: 1,
                    playlist: "s9n47lkKqVk", // Reemplaza con tu ID de video para que funcione el loop
                 },
                 events: {
                    onReady: (event) => {
                       event.target.playVideo();
                    },
                    onStateChange: (event) => {
                       if (event.data === window.YT.PlayerState.ENDED) {
                          event.target.seekTo(0); // Reinicia el video al inicio
                       }
                    },
                 },
              });
           };
        }, []);
        */
   
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
                          {/* <span
                             className="wave"
                             role="img"
                             aria-labelledby="wave"
                          >
                             {t("handshake")}
                          </span> */}
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
