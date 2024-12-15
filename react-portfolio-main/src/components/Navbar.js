import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import {
   AiOutlineUser,
   AiOutlineDeploymentUnit,
   AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
   // const [expand, updateExpanded] = useState(false);
   const [navColour, updateNavbar] = useState(false);
   const [activeNav, setActiveNav] = useState("");

   useEffect(() => {
      const scrollHandler = () => {
         if (window.scrollY >= 20) {
            updateNavbar(true);
         } else {
            updateNavbar(false);
         }

         // Define section positions
         const sections = ["about", "skills", "projects"];
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

   return (
      <Navbar
         // expanded={expand}
         fixed="top"
         // expand="md"
         className={navColour ? "sticky" : "navbar"}
      >
         {/* <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
               updateExpanded(expand ? false : "expanded");
            }}
         >
            <span></span>
            <span></span>
            <span></span>
         </Navbar.Toggle> */}
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
                     <AiOutlineUser style={{ marginBottom: "2px" }} /> About
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
                     Services
                  </Nav.Link>
               </Nav.Item>
               <Nav.Item>
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
