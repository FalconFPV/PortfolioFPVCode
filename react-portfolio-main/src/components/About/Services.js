import React from "react";
import {
   FaHome,
   FaCalendar,
   FaWrench,
   FaMountain,
   FaCamera,
} from "react-icons/fa";
// Importar iconos lenguajes
import ServiceCard from "./ServiceCard";
import { useTranslation } from "react-i18next";
import aerial from "../../Assets/ServiceImg/aerial.jpeg";
import realEstate from "../../Assets/ServiceImg/realstate.jpg";
import event from "../../Assets/ServiceImg/wedding.jpg";
import inspection from "../../Assets/ServiceImg/inspec.jpg";
import fpv from "../../Assets/ServiceImg/fpv.jpg";

const Services = () => {
   const { t } = useTranslation();

const services = [
   {
      name: t("aerial_photography"),
      icon: <FaCamera />,
      desc: t("aerial_photography_desc"),
      img: aerial,
      link: "aerial-photography",
   },
   {
      name: t("real_estate_services"),
      icon: <FaHome />,
      desc: t("real_estate_services_desc"),
      img: realEstate,
      link: "real-estate",
   },
   {
      name: t("event_coverage"),
      icon: <FaCalendar />,
      desc: t("event_coverage_desc"),
      img: event,
      link: "events",
   },
   // {
   //    name: t("inspections_surveys"),
   //    icon: <FaWrench />,
   //    desc: t("inspections_surveys_desc"),
   //    img: inspection,
   //    link: "inspections",
   // },
   {
      name: t("fpv"),
      icon: <FaMountain />,
      desc: t("fpv_desc"),
      img: fpv,
      link: "fpv",
   },
];


   return (
      <div>
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
                        link={service.link}
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Services;
