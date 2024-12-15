// import React from "react";
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// function Preloader({ load }) {
//    return (
//       <div id="preloader" className={load ? "visible" : "hidden"}>
//          <Loader
//             type="Oval"
//             color="var(--imp-text-color)"
//             height={100}
//             width={100}
//          />
//       </div>
//    );
// }

// export default Preloader;

import React, { useEffect, useState } from "react";

function Preloader({ load }) {
   const [progress, setProgress] = useState(0);

   useEffect(() => {
      if (load) {
         let start = 0;
         const increment = 1; // Incremento en porcentaje
         const intervalTime = 12; // Tiempo de intervalo en milisegundos (1200ms / 100 incrementos)

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
      </div>
   );
}

export default Preloader;

