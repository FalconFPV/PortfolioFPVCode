import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import About from "../About/About";
import { FaArrowDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Animations from "../../Animations";
import video from "../../Assets/Video2.mp4";
import Contact from "./Contact";
import SplitText from "./SplitText";

function Home() {
   const { t } = useTranslation();
   const [showText, setShowText] = useState(false);
   const [videoLoaded, setVideoLoaded] = useState(false);
   const videoRef = useRef(null);

      useEffect(() => {
         const handleLoadedData = () => {
            setVideoLoaded(true);
         };

         if (videoRef.current) {
            videoRef.current.addEventListener("loadeddata", handleLoadedData);
         }

         return () => {
            if (videoRef.current) {
               videoRef.current.removeEventListener(
                  "loadeddata",
                  handleLoadedData
               );
            }
         };
      }, []);

     useEffect(() => {
        const timeout = setTimeout(() => {
           if (videoRef.current) {
              videoRef.current.play();
           }
            setShowText(true);
        }, 1000); 

        return () => clearTimeout(timeout); 
     }, []);
   
  return (
     <section>
        <Container fluid className="home-section" id="home">
           <Row className="home-content">
              <Row className="home-row">
                 <div className="video-background">
                    {!videoLoaded && (
                       <div className="img-loader">
                          <Spinner
                             animation="border"
                             style={{
                                color: "var(--imp-text-color)",
                                opacity: 0.2,
                             }}
                          />
                       </div>
                    )}
                    <video
                       id="player"
                       className="y-video"
                       src={video}
                       muted
                       playsInline
                       loop
                       ref={videoRef}
                    ></video>
                 </div>
                 <div className="home-header">
                    <div className="home-first">
                       <h1 style={{ paddingBottom: 15 }} className="heading">
                          <strong className="main-name"> {t("name")}</strong>
                          {" - "}
                          {t("dronepilot")}
                       </h1>
                       <h1 className="heading-name">
                          {showText && (
                             <SplitText
                                text={t("slogan")}
                                className="text-2xl font-semibold text-center"
                                delay={40}
                                animationFrom={{
                                   opacity: 0,
                                   transform: "translate3d(0,50px,0)",
                                }}
                                animationTo={{
                                   opacity: 1,
                                   transform: "translate3d(0,0,0)",
                                }}
                                easing="easeOutCubic"
                                threshold={0.2}
                                rootMargin="-50px"
                             />
                          )}
                       </h1>
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
           <Row className="about-container">
              <About />
           </Row>
        </Container>
        <div className="home-contact">
           <Contact />
        </div>
     </section>
  );
}

export default Home;