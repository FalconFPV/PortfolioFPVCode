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
import aerial from "../../Assets/ServiceImg/aerial.webp";
import realEstate from "../../Assets/ServiceImg/realstate.webp";
import event from "../../Assets/ServiceImg/wedding.webp";
import inspection from "../../Assets/ServiceImg/inspec.webp";
import landscape from "../../Assets/ServiceImg/tourism.webp";

const Services = () => {
   const { t } = useTranslation();

   const services = [
      {
         name: t("aerial_photography"),
         icon: <FaCamera />, // Ícono de fotografía
         desc: t("aerial_photography_desc"),
         img: aerial,
      },
      {
         name: t("real_estate_services"),
         icon: <FaHome />, // Ícono de inmobiliaria
         desc: t("real_estate_services_desc"),
         img: realEstate,
      },
      {
         name: t("event_coverage"),
         icon: <FaCalendar />, // Ícono de eventos
         desc: t("event_coverage_desc"),
         img: event,
      },
      {
         name: t("inspections_surveys"),
         icon: <FaWrench />, // Ícono de inspecciones
         desc: t("inspections_surveys_desc"),
         img: inspection,
      },
      {
         name: t("landscapes_tourism"),
         icon: <FaMountain />, // Ícono de paisajes
         desc: t("landscapes_tourism_desc"),
         img: landscape,
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
                        img={service.img}
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Services;
