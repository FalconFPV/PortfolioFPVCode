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
import { useTranslation } from "react-i18next";

const Services = () => {
   const { t } = useTranslation();

   const services = [
      {
         name: t("aerial_photography"),
         icon: <FaCamera />, // Ícono de fotografía
         desc: t("aerial_photography_desc"),
      },
      {
         name: t("real_estate_services"),
         icon: <FaHome />, // Ícono de inmobiliaria
         desc: t("real_estate_services_desc"),
      },
      {
         name: t("event_coverage"),
         icon: <FaCalendar />, // Ícono de eventos
         desc: t("event_coverage_desc"),
      },
      {
         name: t("inspections_surveys"),
         icon: <FaWrench />, // Ícono de inspecciones
         desc: t("inspections_surveys_desc"),
      },
      {
         name: t("landscapes_tourism"),
         icon: <FaMountain />, // Ícono de paisajes
         desc: t("landscapes_tourism_desc"),
      },
   ];

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
               <h1>{t("services")}</h1>
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
