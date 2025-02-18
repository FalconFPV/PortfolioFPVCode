import React, { useEffect, useRef, useState } from "react";
import "./Animations.css"; // Importamos las animaciones CSS

const Animations = ({ children, animationType }) => {
   const elementRef = useRef(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  setIsVisible(true);
               } else {
                  setIsVisible(false); // Reinicia la visibilidad
               }
            });
         },
         { threshold: 0.1 } // Se activa si al menos el 10% del elemento es visible
      );

      const currentElement = elementRef.current; // Guardamos la referencia actual

      if (currentElement) {
         observer.observe(currentElement);
      }

      return () => {
         if (currentElement) observer.unobserve(currentElement);
      };
   }, []);

   return (
      <div
         ref={elementRef}
         className={`animated-element ${isVisible ? animationType : ""}`}
      >
         {children}
      </div>
   );
};

export default Animations;
