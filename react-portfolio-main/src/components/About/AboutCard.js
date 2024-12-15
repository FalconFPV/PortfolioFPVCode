import React, { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import myImg from "../../Assets/banner_joancompany.png";

function AboutCard() {
   const containerRef = useRef(null);
   const textRef = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target
                     .querySelector(".profile-pic")
                     .classList.add("visible");
                  entry.target
                     .querySelector(".pic-shadow")
                     .classList.add("visible");
                  entry.target
                     .querySelector(".about-text-container")
                     .classList.add("visible");
               } else {
                  entry.target
                     .querySelector(".profile-pic")
                     .classList.remove("visible");
                  entry.target
                     .querySelector(".pic-shadow")
                     .classList.remove("visible");
                  entry.target
                     .querySelector(".about-text-container")
                     .classList.remove("visible");
               }
            });
         },
         { threshold: 0.1 }
      );

      if (containerRef.current) {
         observer.observe(containerRef.current);
      }

      return () => {
         if (containerRef.current) {
            observer.unobserve(containerRef.current);
         }
      };
   }, []);

   return (
      <Card className="quote-card-view">
         <Card.Body>
            <div className="about-card-container" ref={containerRef}>
               <div ref={textRef} className="about-text-container">
                  <blockquote className="blockquote mb-0">
                     <h1 id="about-title">About me</h1>
                     <p className="heading-description blockquote">
                        Hi Everyone, I am{" "}
                        <span className="purple">Joan Company Pastor </span>
                        from Alcudia, Mallorca.
                     </p>
                     <p className="heading-description blockquote">
                        I am currently working as a{" "}
                        <span className="purple">
                           Frontend Web Developer
                        </span>
                        , where I focus on creating and managing projects for
                        new clients. Driven by a constant need to learn and
                        grow, I actively pursue further education and training
                        to stay at the forefront of web development.
                     </p>
                     <p className="heading-description blockquote">
                        I am committed to continuous learning and professional
                        growth, always staying up-to-date with industry trends.
                        My excellent communication skills and collaborative
                        spirit make me a valuable team player, dedicated to
                        delivering high-quality results and contributing
                        positively to any project.
                     </p>
                  </blockquote>
               </div>
               <div className="profile-pic-container">
                  <div className="pic-shadow"></div>
                  <img src={myImg} className="profile-pic" alt="avatar" />
               </div>
            </div>
         </Card.Body>
      </Card>
   );
}

export default AboutCard;
