import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Flag from "react-world-flags";
import {
   AiOutlineUser,
   AiOutlineDeploymentUnit,
   AiOutlineMail,
   AiOutlineRocket,
   AiOutlineStar,
   AiOutlineSolution
} from "react-icons/ai";
import { useTranslation } from "react-i18next";
import LofoFalcon from "../Assets/Falcon FPV.png";
import { NavLink, useLocation } from "react-router-dom"; // Importa useLocation

function NavBar() {
   const { t, i18n } = useTranslation();
   const [expand, updateExpanded] = useState(false);
   const [navColour, updateNavbar] = useState(false);
   const [backGround, updateBackground] = useState(false);
   const [activeNav, setActiveNav] = useState("");
   const [language, setLanguage] = useState("es"); // Estado para la bandera (español por defecto)
   const location = useLocation(); // Obtiene la ruta actual

   const serviceRoutes = [
      "/aerial-photography",
      "/real-estate",
      "/events",
      "/inspections",
      "/fpv",
      "/policy",
      "/conditions",
   ];
   
   const workdrones = [
      "/drones",
      "/works",
   ];

   const privacyPolicy = [
      "/policy",
      "/conditions",
   ];
   const isServicePage = serviceRoutes.includes(location.pathname);
   const isWorksPage = workdrones.includes(location.pathname);
   const isPrivacyPolicyPage = privacyPolicy.includes(location.pathname);
   useEffect(() => {
      const storedLanguage = localStorage.getItem("selectedLanguage");
      if (storedLanguage) {
         setLanguage(storedLanguage);
         i18n.changeLanguage(storedLanguage);
      }
      const scrollHandler = () => {
         if (window.scrollY >= 20) {
            updateNavbar(true);
            updateBackground(true);
         } else {
            updateNavbar(false);
            updateBackground(false);
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
      updateExpanded(false);
      const section = document.getElementById(sectionId);
      if (section) {
         section.scrollIntoView({ behavior: "smooth" });
      }
   };

   const toggleLanguage = () => {
      setLanguage((prevLanguage) => {
         const newLanguage = prevLanguage === "es" ? "en" : "es";
         i18n.changeLanguage(newLanguage);
         localStorage.setItem("selectedLanguage", newLanguage);
         return newLanguage;
      });
   };

      const handleToggleClick = () => {
         updateExpanded(!expand);
         updateBackground(!backGround); // Cambia el estado de backGround
      };

   return (
      <Navbar
         expanded={expand}
         fixed="top"
         expand="xl"
         className={navColour ? "sticky" : "navbar"}
         id={backGround ? "backGroundNavbar" : ""}
      >
         <Navbar.Brand
            href={isServicePage || isWorksPage || isPrivacyPolicyPage ? "/PortfolioFalcon" : "#home"}
         >
            <img src={LofoFalcon} className="logo" alt="brand" style={{}} />
         </Navbar.Brand>
         <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleToggleClick} // Agrega el manejador de eventos aquí
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
                           alt="Language flag"
                        />
                     </div>
                  </Nav.Link>
               </Nav.Item>
               {!(isServicePage || isWorksPage) && (
                  <>
                     <Nav.Item>
                        <Nav.Link
                           href="#"
                           onClick={(e) => {
                              e.preventDefault();
                              handleNavClick("about");
                           }}
                           className={activeNav === "about" ? "act" : ""}
                        >
                           <AiOutlineUser style={{ marginBottom: "2px" }} />{" "}
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
                           <AiOutlineDeploymentUnit
                              style={{ marginBottom: "2px" }}
                           />{" "}
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
                     {/* Opiniones */}
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
                     <Nav.Item>
                        <Nav.Link
                           as={NavLink}
                           to="/works"
                           className={activeNav === "works" ? "act" : ""}
                        >
                           <AiOutlineSolution style={{ marginBottom: "2px" }} />{" "}
                           {t("works")}
                        </Nav.Link>
                     </Nav.Item>
                  </>
               )}

               {(isServicePage || isWorksPage) && (
                  <>
                     <Nav.Item>
                        <Nav.Link href="/PortfolioFalcon">
                           <AiOutlineUser style={{ marginBottom: "2px" }} />{" "}
                           {t("home")}
                        </Nav.Link>
                     </Nav.Item>
                  </>
               )}
               {!isPrivacyPolicyPage && (
                  <>
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
                  </>
               )}
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}

export default NavBar;
