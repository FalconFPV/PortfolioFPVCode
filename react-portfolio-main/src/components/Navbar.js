import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Flag from "react-world-flags";
import {
   AiOutlineUser,
   AiOutlineDeploymentUnit,
   AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { useTranslation } from "react-i18next";

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
         const sections = ["about", "skills", "contact"];
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
         <Nav.Item>
            <Nav.Link
               onClick={toggleLanguage}
               style={{ cursor: "pointer" }}
               title={
                  language === "es" ? "Cambiar a inglés" : "Switch to Spanish"
               }
            >
               <Flag
                  code={language === "es" ? "es" : "gb"}
                  className="lang-flag" // Texto dinámico
               />
            </Nav.Link>
         </Nav.Item>
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
                        handleNavClick("contact");
                     }}
                     className={activeNav === "contact" ? "act" : ""}
                  >
                     <AiOutlineDeploymentUnit style={{ marginBottom: "2px" }} />{" "}
                     {t("contact")}
                  </Nav.Link>
               </Nav.Item>
               {/* <Nav.Item>
                  <Nav.Link
                     href="#"
                     onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("projects");
                     }}
                     className={activeNav === "projects" ? "act" : ""}
                  >
                     <AiOutlineFundProjectionScreen
                        style={{ marginBottom: "2px" }}
                     />{" "}
                     Projects
                  </Nav.Link>
               </Nav.Item> */}
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
