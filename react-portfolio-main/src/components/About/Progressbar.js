import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";

const fill = keyframes`
  from {
    width: 0%;
  }
  to {
    width: ${(props) => props.width};
  }
`;

const ProgressBarContainer = styled.div`
   margin: 20px 0;
   opacity: 0;
   transform: translateX(-50px);
   transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const Bar = styled.div`
   height: 10px;
   border-radius: 5px;
   background-color: ${(props) => props.bgColor || "#d6d6d6"};
   width: ${(props) => props.width || "0%"};
   animation: ${fill} 2s ease forwards;
   z-index: 2;
`;

const Label = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 5px;
`;

const ProgressBar = ({ label, percentage, color }) => {
   const [width, setWidth] = useState("0%");
   const containerRef = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach(entry => {
               if (entry.isIntersecting) {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateX(0)';
                  setTimeout(() => {
                     setWidth(`${percentage}%`);
                  }, 300); // Inicia la animación después de un pequeño retraso
               } else {
                  entry.target.style.opacity = '0';
                  entry.target.style.transform = 'translateX(-50px)';
                  setWidth("0%"); // Reinicia la barra cuando sale de la vista
               }
            });
         },
         { threshold: 0.2 }
      );

      if (containerRef.current) {
         observer.observe(containerRef.current);
      }

      return () => {
         if (containerRef.current) {
            observer.unobserve(containerRef.current);
         }
      };
   }, [percentage]);

   return (
      <ProgressBarContainer ref={containerRef}>
         <Label>
            <span className="hability-label">{label}</span>
            <span>{percentage}%</span>
         </Label>
         <div className="bar-container">
            <Bar width={width} bgColor={color} />
            <Bar width="100%" bgColor="#d6d6d6" />
         </div>
      </ProgressBarContainer>
   );
};

export default ProgressBar;


