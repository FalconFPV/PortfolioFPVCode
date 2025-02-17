import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Flag from "react-world-flags";
import {
   AiOutlineUser,
   AiOutlineDeploymentUnit,
   AiOutlineMail,
   AiOutlineRocket,
   AiOutlineStar
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import LofoFalcon from "../Assets/Falcon FPV.png";
function NavBar() {
   const { t, i18n } = useTranslation();
   const [expand, updateExpanded] = useState(false);
   const [navColour, updateNavbar] = useState(false);
   const [activeNav, setActiveNav] = useState("");
   const [language, setLanguage] = useState("es"); // Estado para la bandera (español por defecto)

   useEffect(() => {
      const scrollHandler = () => {
         if (window.scrollY >= 20) {
            updateNavbar(true);
         } else {
            updateNavbar(false);
         }

         // Define section positions
         const sections = ["about", "skills", "fleet", "testimonials"];
         let currentSection = "";

         for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (
               section &&
               window.scrollY + window.innerHeight / 2 >= section.offsetTop
            ) {
               currentSection = sections[i];
               break;
            }
         }

         setActiveNav(currentSection);
      };

      window.addEventListener("scroll", scrollHandler);

      // Cleanup the event listener on unmount
      return () => {
         window.removeEventListener("scroll", scrollHandler);
      };
   }, []);

   const handleNavClick = (sectionId) => {
      setActiveNav(sectionId);
      // updateExpanded(false);
      const section = document.getElementById(sectionId);
      if (section) {
         section.scrollIntoView({ behavior: "smooth" });
      }
   };

   // Función para alternar la bandera
   const toggleLanguage = () => {
      setLanguage((prevLanguage) => {
         const newLanguage = prevLanguage === "es" ? "en" : "es";
         i18n.changeLanguage(newLanguage); // Cambia el idioma
         return newLanguage; // Actualiza el estado de la bandera
      });
   };   

   return (
      <Navbar
         expanded={expand}
         fixed="top"
         expand="md"
         className={navColour ? "sticky" : "navbar"}
      >
         <Navbar.Brand href="#home">
            <img src={LofoFalcon} className="logo" alt="brand" style={{}} />
         </Navbar.Brand>
         <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
               updateExpanded(expand ? false : "expanded");
            }}
         >
            <span></span>
            <span></span>
            <span></span>
         </Navbar.Toggle>
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
               <Nav.Item>
                  <Nav.Link
                     onClick={toggleLanguage}
                     style={{ cursor: "pointer" }}
                     title={
                        language === "es"
                           ? "Cambiar a inglés"
                           : "Switch to Spanish"
                     }
                  >
                     <div className="lang-container">
                        <span>{language === "es" ? "ES |" : "EN |"} </span>
                        <Flag
                           code={language === "es" ? "es" : "gb"}
                           className="lang-flag" // Texto dinámico
                        />
                     </div>
                  </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link
                     href="#"
                     onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("about");
                     }}
                     className={activeNav === "about" ? "act" : ""}
                  >
                     <AiOutlineUser style={{ marginBottom: "2px" }} />
                     {t("my_history")}
                  </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link
                     href="#"
                     onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("skills");
                     }}
                     className={activeNav === "skills" ? "act" : ""}
                  >
                     <AiOutlineDeploymentUnit style={{ marginBottom: "2px" }} />{" "}
                     {t("services")}
                  </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link
                     href="#"
                     onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("fleet");
                     }}
                     className={activeNav === "fleet" ? "act" : ""}
                  >
                     <AiOutlineRocket style={{ marginBottom: "2px" }} />{" "}
                     {t("equipo_tecnologia")}
                  </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link
                     href="#"
                     onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("testimonials");
                     }}
                     className={activeNav === "testimonials" ? "act" : ""}
                  >
                     <AiOutlineStar style={{ marginBottom: "2px" }} />{" "}
                     {t("opiniones")}
                  </Nav.Link>
               </Nav.Item>
               <Nav.Item className="nav-contact-button">
                  <div className="nav-contact-button-container">
                     <Nav.Link
                        href="#"
                        onClick={(e) => {
                           e.preventDefault();
                           handleNavClick("contact");
                        }}
                     >
                        <AiOutlineMail style={{ marginBottom: "2px" }} />{" "}
                        {t("contact")}
                     </Nav.Link>
                  </div>
               </Nav.Item>
               {/* <Nav.Item>
                  <Nav.Link
                  to="/resume"
                  onClick={(e) => {
                        handleNavClick("resume");
                  }}
                  className={activeNav === "resume" ? "active" : ""}
                  >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                  </Nav.Link>
               </Nav.Item> */}
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}

export default NavBar;
