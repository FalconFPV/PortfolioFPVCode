import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
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

      // Limpiar el listener cuando el componente se desmonte
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   const openWhatsApp = () => {
      // Reemplaza con tu número de WhatsApp (sin el +)
      const phoneNumber = "615159344";
      // Puedes añadir un mensaje predeterminado si quieres
    const url = `https://wa.me/${phoneNumber}`;
      window.open(url, "_blank");
   };

   return (
      <button
         className={`whatsapp-button ${isVisible ? "visible" : ""}`}
         onClick={openWhatsApp}
         aria-label="Contactar por WhatsApp"
      >
         <FaWhatsapp />
      </button>
   );
}

export default WhatsAppButton;
