import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import myImg from "../../Assets/banner_joancompany5.jpg";
import Carousel from "react-bootstrap/Carousel"; 
import { useTranslation } from "react-i18next";
import Counter from "../Counter";

function AboutCard() {
   const { t } = useTranslation();
   const containersRef = useRef([]);
   const [countersStarted, setCountersStarted] = useState(false);
   const carouselImages = [
      {
         src: require("../../Assets/bdr.webp"),
         alt: "Balearic Drone Racing",
      },
      {
         src: require("../../Assets/toledo.webp"),
         alt: "Iberian Drone League - Toledo",
      },
      {
         src: require("../../Assets/mdp.webp"),
         alt: "Mollerussa Drone Party 2020",
      },
      {
         src: require("../../Assets/dcl.gif"),
         alt: "Drone Champions League 2020",
      },
   ];

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               const profilePic = entry.target.querySelector(".profile-pic");
               const picShadow = entry.target.querySelector(".pic-shadow");
               const aboutTextContainer = entry.target.querySelector(
                  ".about-text-container"
               );
               const carouselContainer =
                  entry.target.querySelector(".history-carousel");
               const experienceContainer = entry.target.querySelector(
                  ".experience-container");

               if (profilePic) profilePic.classList.add("visible");
               if (picShadow) picShadow.classList.add("visible");
               if (aboutTextContainer) aboutTextContainer.classList.add("visible");
               if (carouselContainer) carouselContainer.classList.add("visible");
               if (experienceContainer) setCountersStarted(true);
            } else {
               const profilePic = entry.target.querySelector(".profile-pic");
               const picShadow = entry.target.querySelector(".pic-shadow");
               const aboutTextContainer = entry.target.querySelector(
                  ".about-text-container"
               );
               const carouselContainer =
                  entry.target.querySelector(".history-carousel");

               if (profilePic) profilePic.classList.remove("visible");
               if (picShadow) picShadow.classList.remove("visible");
               if (aboutTextContainer) aboutTextContainer.classList.remove("visible");
               if (carouselContainer) carouselContainer.classList.remove("visible");
            }
         });

         },
         { threshold: 0.1 }
      );

      containersRef.current.forEach((container) => {
         if (container) {
            observer.observe(container);
         }
      });

      return () => {
         containersRef.current.forEach((container) => {
            if (container) {
               observer.unobserve(container);
            }
         });
      };
   }, []);

   return (
      <Card className="quote-card-view">
         <Card.Body>
            <div
               className="about-card-container"
               ref={(el) => el && containersRef.current.push(el)}
            >
               <div className="about-text-container">
                  <blockquote className="blockquote mb-0">
                     <h1 id="about-title">{t("my_history")}</h1>
                     <h2 className="heading-title">{t("history_title")}</h2>
                     <p className="heading-description blockquote">
                        {t("namis")} <span className="purple">{t("name")}</span>
                        {t("wellknown")}
                        <span className="purple">{t("falcon")}</span>,
                        {t("history_content")}
                     </p>
                     <p className="heading-description blockquote">
                        {t("history_content_2")}
                     </p>
                  </blockquote>
               </div>
               <div className="profile-pic-container">
                  <div className="pic-shadow"></div>
                  <img src={myImg} className="profile-pic" alt="avatar" title="Avatar" />
               </div>
            </div>
            <div
               className="about-card-container"
               ref={(el) => el && containersRef.current.push(el)}
            >
               <div className="history-carousel-container">
                  <div className="history-carousel">
                     <Carousel>
                        {carouselImages.map((image, index) => (
                           <Carousel.Item key={index}>
                              <img
                                 className="d-block"
                                 src={image.src}
                                 alt={image.alt}
                                 title={image.alt}
                              />
                              <p>{image.alt}</p>
                           </Carousel.Item>
                        ))}
                     </Carousel>
                  </div>
               </div>
               <div className="about-text-container">
                  <blockquote className="blockquote mb-0">
                     <h2 className="heading-title">{t("highlights_title")}</h2>
                     <ul className="heading-description blockquote">
                        <li>{t("highlight_1")}</li>
                        <li>{t("highlight_2")}</li>
                        <li>{t("highlight_3")}</li>
                        <li>
                           {t("highlight_4")}{" "}
                           <span className="purple">{t("sdt")}</span>
                        </li>
                     </ul>
                     <p className="heading-description blockquote">
                        {t("experience_summary")}
                     </p>
                  </blockquote>
               </div>
            </div>
            <div
               className="about-card-container"
               ref={(el) => el && containersRef.current.push(el)}
            >
               <div
                  className="experience-container"
                  data-aos="fade-up"
                  data-aos-duration="1000"
               >
                  <h2 className="heading-title">{t("experience")}</h2>
                  <div className="experience-counters">
                     <div className="years-container">
                        {countersStarted && (
                           <Counter
                              value={7}
                              places={[1]}
                              fontSize={80}
                              padding={5}
                              gap={10}
                              textColor="var(--imp-background-light-color)"
                              fontWeight={900}
                              duration={2}
                           />
                        )}
                        <p className="years-text">
                           {t("years_flying")}
                        </p>
                     </div>
                     <div className="hours-container">
                        {countersStarted && (
                           <Counter
                              value={1000}
                              places={[1000, 100, 10, 1]}
                              fontSize={80}
                              padding={5}
                              gap={10}
                              textColor="var(--imp-background-light-color)"
                              fontWeight={900}
                              duration={2}
                           />
                        )}
                        <p className="hours-text">{t("flight_hours")}</p>
                     </div>
                  </div>
               </div>
            </div>
         </Card.Body>
      </Card>
   );
}

export default AboutCard;
