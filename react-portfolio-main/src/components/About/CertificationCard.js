import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

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

// Estilo de la tarjeta de certificación
const Card = styled.div`
   background-color: hsl(0, 0%, 5%);
   border-radius: 10px;
   border: 1px solid #fff;
   padding: 20px;
   margin: 20px;
   width: 330px;
   height: 430px;
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
      /*animation: ${pulse} 2s;*/ /* Efecto de pulso mientras es visible */
   }

`;

// Estilo para el nombre de la certificación
const Name = styled.h2`
   margin-bottom: 15px;
   font-size: 24px;
   color: var(--imp-text-color);
`;

// Estilo para la descripción de la certificación
const Description = styled.p`
   font-size: 16px;
   color: #fff;
`;

// Componente CertificationCard
const CertificationCard = ({ name, img, desc, delay }) => {
   const [isVisible, setIsVisible] = useState(false);
   const cardRef = useRef(null);

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
         className={isVisible ? "visible" : ""}
         delay={delay}
         id="droneCard"
      >
         <div>
            <img className="drone" src={img} alt={name} title={name} />
            <div className="cert-text">
               <Name>{name}</Name>
               <Description>{desc}</Description>
            </div>
         </div>
      </Card>
   );
};

export default CertificationCard;
