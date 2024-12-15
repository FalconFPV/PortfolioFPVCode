import React, { useEffect, useState, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = ({ text, percentage, experience, Component }) => {
   const [value, setValue] = useState(0);
   const barRef = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  // Cuando el elemento entra en la vista
                  entry.target.classList.add("visible");
                  setValue(0); // Resetea el valor
                  setTimeout(() => {
                     setValue(percentage); // Inicia la animación de progreso
                  }, 300);
               } else {
                  // Cuando el elemento sale de la vista
                  entry.target.classList.remove("visible");
                  setValue(0); // Opcional: resetea el valor a 0 cuando no es visible
               }
            });
         },
         { threshold: 0.2 }
      );

      if (barRef.current) {
         observer.observe(barRef.current);
      }

      return () => {
         if (barRef.current) {
            observer.unobserve(barRef.current);
         }
      };
   }, [percentage]);

   return (
      <div
         ref={barRef}
         className="circular-bar"
         style={{
            width: "120px",
            height: "120px",
            position: "relative",
         }}
      >
         <CircularProgressbar
            value={value}
            styles={buildStyles({
               pathColor: "var(--imp-text-color)",
               trailColor: "#d6d6d6",
               transition: "stroke-dashoffset 2s ease 0s", // Animación de la barra
               textColor: "transparent", // Esto asegura que el texto no sea visible
            })}
         />
         <div
            className="code-logo-container"
            style={{
               position: "absolute",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               width: "50%",
               height: "50%",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
            }}
         >
            {Component && (
               <Component style={{ width: "100%", height: "100%" }} />
            )}
            <div className="lang-experience">+{experience}</div>
         </div>
         <h5 className="skill">{text}</h5>
      </div>
   );
};

export default CircularProgressBar;
