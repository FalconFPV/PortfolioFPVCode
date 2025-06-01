import React, { useState, useEffect } from "react";
import profileImage from "../../Assets/banner_joancompany5.jpg";
import links from "./Links";
import { FaMoon, FaShareAlt, FaSun } from "react-icons/fa";

const BioCard = () => {
   const [isDarkMode, setIsDarkMode] = useState(true);

   // Función para aplicar los colores según el modo
   const applyTheme = (darkMode) => {
      if (darkMode) {
         document.documentElement.style.setProperty(
            "--imp-background-dark-color",
            "#0d0d0d"
         );
         document.documentElement.style.setProperty(
            "--imp-background-light-color",
            "#fafeff"
         );
      } else {
         document.documentElement.style.setProperty(
            "--imp-background-dark-color",
            "#ffffff"
         );
         document.documentElement.style.setProperty(
            "--imp-background-light-color",
            "#0d0d0d"
         );
      }
   };

   // Aplicar tema al cargar la página
   useEffect(() => {
      const savedTheme = localStorage.getItem("darkMode");
      if (savedTheme !== null) {
         setIsDarkMode(savedTheme === "true");
         applyTheme(savedTheme === "true");
      } else {
         applyTheme(isDarkMode); // Aplicar tema por defecto
      }
   }, []);

   // Cambiar modo oscuro
   const toggleDarkMode = () => {
      const newMode = !isDarkMode;
      setIsDarkMode(newMode);
      applyTheme(newMode);
      localStorage.setItem("darkMode", newMode);
   };

   const handleShare = () => {
      const shareData = {
         title: "Joan Company - Links",
         text: "Echa un vistazo a mi perfil!",
         url: "https://joancompany.es/links", // Tu URL específica
      };

      if (navigator.share) {
         navigator
            .share(shareData)
            .then(() => console.log("Compartido con éxito"))
            .catch((error) => console.error("Error al compartir:", error));
      } else {
         // Fallback: Copiar enlace al portapapeles
         navigator.clipboard
            .writeText(shareData.url)
            .then(() => alert("Enlace copiado al portapapeles"))
            .catch((error) => console.error("Error al copiar:", error));
      }
   };

   return (
      <div className="bio-card">
         <div className="share-darkmode">
            <div className="darkmode">
               <button className="darkmode-button" onClick={toggleDarkMode}>
                  {isDarkMode ? <FaSun /> : <FaMoon />}
               </button>
            </div>
            <div className="share">
               <button onClick={handleShare} className="share-link">
                  <FaShareAlt />
               </button>
            </div>
         </div>
         <div className="profile-img">
            <div className="profile-img-shadow"></div>
            <img
               src={profileImage}
               alt="Falcon Image"
               className="bio-card-image"
            />
         </div>
         <div className="bio-card-content">
            <h1 className="bio-card-name">Joan Company</h1>
            <h2 className="bio-card-tag">@falcon_fpv</h2>
            <p className="bio-card-description">Professional Drone Pilot</p>
         </div>
         <div className="bio-card-links">
            {links.map((link, index) => (
               <a key={index} href={link.link} className="bio-card-link">
                  <link.icon />
               </a>
            ))}
         </div>
         <div className="bio-links-cards">
            {links.map((link, index) => (
               <a href={link.link} key={index} className="bio-link-card">
                  <link.icon className="bio-link-card-icon" />
                  <p className="bio-link-card-name">{link.name}</p>
               </a>
            ))}
         </div>
         <div className="bio-card-footer">
            <p className="bio-card-footer-text">
               © 2025 Joan Company. All rights reserved.
            </p>
         </div>
      </div>
   );
};

export default BioCard;
