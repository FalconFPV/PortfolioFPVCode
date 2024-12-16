import React from "react";
import {
   FaHome,
   FaCalendar,
   FaWrench,
   FaMountain,
   FaVideo,
   FaCamera,
} from "react-icons/fa";
// Importar iconos lenguajes
import ServiceCard from "./ServiceCard";

const services = [
   {
      name: "Aerial Photography and Videography",
      icon: <FaCamera />, // Ícono de fotografía
      desc: "Capturing high-quality aerial photos or videos for real estate, events, and personal projects.",
   },
   {
      name: "Real Estate Drone Services",
      icon: <FaHome />, // Ícono de inmobiliaria
      desc: "Showcasing properties with professional aerial photos and videos to attract potential buyers.",
   },
   {
      name: "Event Coverage",
      icon: <FaCalendar />, // Ícono de eventos
      desc: "Providing unique aerial footage for weddings, sports, concerts, and other special occasions.",
   },
   {
      name: "Inspections and Surveys",
      icon: <FaWrench />, // Ícono de inspecciones
      desc: "Performing drone inspections for roofs, construction sites, and hard-to-reach areas with precision and safety.",
   },
   {
      name: "Landscapes and Tourism",
      icon: <FaMountain />, // Ícono de paisajes
      desc: "Creating captivating aerial views for tourism promotion, outdoor activities, or personal collections.",
   },
];

const Services = () => {
   return (
      <div>
         {/* <h1>Technichal Skills</h1>
         <div
            className="skills"
            style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "center",
            }}
         >
            {skills.map((skill, index) => (
               <CircularProgressBar
                  key={index}
                  percentage={skill.percentage}
                  experience={skill.experience}
                  text={skill.name}
                  Component={skill.Component}
               />
            ))}
         </div> */}
         <div className="frame-hab-container">
            <div className="habilities">
               <h1>Services</h1>
               <div className="hab-container">
                  {services.map((service, index) => (
                     <ServiceCard
                        key={index}
                        name={service.name}
                        icon={service.icon}
                        desc={service.desc}
                        delay={`${index * 0.1}s`} 
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Services;
