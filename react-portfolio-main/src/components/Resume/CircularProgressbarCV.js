import React, { useEffect, useState, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBarCV = ({ text, percentage, experience, Component }) => {
   const [value, setValue] = useState(0);
   const barRef = useRef(null);

   useEffect(() => {
      setValue(percentage); // Inicia la animación de progreso
   }, [percentage]);

   return (
      <div
         ref={barRef}
         className="circular-bar visible"
         style={{
            width: "100px",
            height: "100px",
            position: "relative",
         }}
      >
         <CircularProgressbar
            value={value}
            styles={buildStyles({
               pathColor: "var(--imp-text-color)",
               trailColor: "#d6d6d6",
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
            {Component && <Component style={{ width: "90%", height: "90%" }} />}
            <div className="lang-experience">+{experience}</div>
         </div>
         <h6 className="skill">{text}</h6>
      </div>
   );
};

export default CircularProgressBarCV;
