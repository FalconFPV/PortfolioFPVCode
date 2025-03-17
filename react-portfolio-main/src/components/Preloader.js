import React, { useEffect, useState } from "react";
import LofoFalcon from "../Assets/Falcon FPV.png";

function Preloader({ load }) {
   const [progress, setProgress] = useState(0);

   useEffect(() => {
      if (load) {
         let start = 0;
         const increment = 2; // Incremento en porcentaje
         const intervalTime = 18; // Tiempo de intervalo en milisegundos (1200ms / 100 incrementos)

         const timer = setInterval(() => {
            start += increment; // Incrementar en pequeños pasos para mayor fluidez
            if (start > 100) {
               clearInterval(timer); // Detener el temporizador cuando llegue al 100%
            }
            setProgress(start);
         }, intervalTime);

         return () => clearInterval(timer);
      }
   }, [load]);

   const radius = 50;
   const circumference = 2 * Math.PI * radius;
   const offset = circumference - (progress / 100) * circumference;

   return (
      <div id="preloader" className={load ? "visible" : "hidden"}>
         <svg className="progress-circle" width="120" height="120">
            <circle
               className="progress-circle-background"
               cx="60"
               cy="60"
               r={radius}
               strokeWidth="10"
               fill="none"
            />
            <circle
               className="progress-circle-fill"
               cx="60"
               cy="60"
               r={radius}
               strokeWidth="10"
               fill="none"
               strokeDasharray={circumference}
               strokeDashoffset={offset}
            />
         </svg>
         <img src={LofoFalcon} className="logoPreloader" alt="logoFalcon" />
      </div>
   );
}

export default Preloader;

