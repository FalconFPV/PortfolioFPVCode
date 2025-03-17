import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

// Definir la animación de entrada
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Definir una animación de pulso para cuando la tarjeta está visible
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const Card = styled.div`
   background-color: hsl(0, 0%, 5%);
   border-radius: 10px;
   border: 1px solid #fff;
   padding: 20px;
   margin: 20px;
   width: 300px;
   height: 350px;
   text-align: center;
   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
   opacity: 0; /* Comienza invisible */
   transform: translateY(20px); /* Comienza desplazada */
   transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
   animation: ${fadeInUp} 0.6s ease-out forwards;
   animation-delay: ${(props) => props.delay || "0s"};

   &.visible {
      opacity: 1;
      transform: translateY(0);
      /*animation: ${pulse} 2s ;*/ /* Efecto de pulso mientras es visible */
   }
`;

const IconContainer = styled.div`
   background-color: hsla(0, 0%, 13%, 0.587);
   border-radius: 50%;
   width: 100px;
   height: 100px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 auto 20px;
`;

const Icon = styled.div`
   font-size: 50px;
   color: var(--imp-text-color);
`;

const Name = styled.h2`
   margin-bottom: 15px;
   font-size: 24px;
   color: var(--imp-text-color);
`;

const Description = styled.p`
   font-size: 16px;
   color: #fff;
`;

const ServiceCard = ({index, name, icon, desc, delay, img, link }) => {
   const [isVisible, setIsVisible] = useState(false);
   const cardRef = useRef(null);
   const { t } = useTranslation();

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  setIsVisible(true); // Hacer visible cuando entra en la vista
               } else {
                  setIsVisible(false); // Hacer invisible cuando sale de la vista
               }
            });
         },
         { threshold: 0.1 } // Puedes ajustar el umbral según necesites
      );

      if (cardRef.current) {
         observer.observe(cardRef.current);
      }

      return () => {
         if (cardRef.current) {
            observer.unobserve(cardRef.current);
         }
      };
   }, []);

   return (
      <Card
         ref={cardRef}
         className={isVisible ? "service visible" : "service"}
         delay={delay}
         style={{ backgroundImage: `url(${img})` }}
      >
         <div
            className="service-content"
            data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
            data-aos-duration="2000"
         >
            <IconContainer>
               <Icon>{icon}</Icon>
            </IconContainer>
            <Name>{name}</Name>
            <Description>{desc}</Description>
            <Link to={link}>
               {t("learn_more")}
               <AiOutlineArrowRight />
            </Link>
         </div>
      </Card>
   );
};

export default ServiceCard;
