import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; 

function ScrollToTopButton() {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         // Mostrar el botón cuando el scroll es mayor a 300px
         if (window.scrollY > 300) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup listener on component unmount
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   return (
      <button
         className={`scroll-to-top ${isVisible ? "visible" : ""}`}
         onClick={scrollToTop}
      >
         <FaArrowUp />
      </button>
   );
}

export default ScrollToTopButton;
