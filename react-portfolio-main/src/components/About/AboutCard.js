import React, { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import myImg from "../../Assets/banner_joancompany.png";
import Carousel from "react-bootstrap/Carousel"; 

function AboutCard() {
   const containersRef = useRef([]); // Inicializamos como un array vacío
   const carouselImages = [
      {
         src: require("../../Assets/Drones/diatone.webp"),
         alt: "Competición en la Liga Balear",
      },
      {
         src: require("../../Assets/Drones/diatone.webp"),
         alt: "Iberian Drone League en Toledo",
      },
      {
         src: require("../../Assets/Drones/diatone.webp"),
         alt: "Mollerussa Drone Party 2020",
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

               if (profilePic) profilePic.classList.add("visible");
               if (picShadow) picShadow.classList.add("visible");
               if (aboutTextContainer) aboutTextContainer.classList.add("visible");
               if (carouselContainer) carouselContainer.classList.add("visible");
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
                     <h1 id="about-title">My History</h1>
                     <h4 className="heading-title">
                        De un hobby a una pasión profesional
                     </h4>
                     <p className="heading-description blockquote">
                        Mi nombre es{" "}
                        <span className="purple">Joan Company</span>, más
                        conocido como <span className="purple">Falcon</span>,
                        tengo 21 años y actualmente soy Piloto de Drones
                        Profesional, desarrollador web y analista de márketing
                        SEO.
                     </p>
                     <p className="heading-description blockquote">
                        Mi pasión por los drones comenzó a los 13 años,
                        inspirado por mi padre, quien volaba aviones RC. Este
                        hobby no solo me introdujo al fascinante mundo de los
                        drones de carreras, sino que también me brindó la
                        oportunidad de conocer a personas increíbles y
                        participar en competiciones nacionales e
                        internacionales.
                     </p>
                  </blockquote>
               </div>
               <div className="profile-pic-container">
                  <div className="pic-shadow"></div>
                  <img src={myImg} className="profile-pic" alt="avatar" />
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
                              />
                              <p>{image.alt}</p>
                           </Carousel.Item>
                        ))}
                     </Carousel>{" "}
                  </div>
               </div>
               <div className="about-text-container">
                  <blockquote className="blockquote mb-0">
                     <h4 className="heading-title">Destacados:</h4>
                     <ul className="heading-description blockquote">
                        <li>
                           Liga Balear de Drones de Carreras (Campeón Baleares)
                        </li>
                        <li>
                           Iberian Drone League (con el equipo MTS en Toledo)
                        </li>
                        <li>Mollerussa Drone Party (2019 y 2020)</li>
                        <li>
                           Drone Champions League, representando al{" "}
                           <span className="purple">Spain Drone Team</span>
                        </li>
                     </ul>
                     <p className="heading-description blockquote">
                        La experiencia adquirida en estas competiciones me llevó
                        a dedicarme profesionalmente a la filmación con drones,
                        aportando creatividad y precisión a proyectos
                        audiovisuales.
                     </p>
                  </blockquote>
               </div>
            </div>
         </Card.Body>
      </Card>
   );
}

export default AboutCard;
