import React from "react";
import { useTranslation } from "react-i18next";
import Contact from "../Home/Contact";
import Neo from "../../Assets/Drones/neoinfo.png";
import Mavic from "../../Assets/Drones/mavicinfo.png";
import Diatone from "../../Assets/Drones/diatone.webp";
import Freestyle from "../../Assets/Drones/fpv.jpeg";

import { FaBalanceScale, FaClock, FaRocket, FaSignal, FaVideo } from "react-icons/fa";

const stabilizedDrones = [
   {
      name: "DJI Mavic Pro",
      image: Mavic,
      desc: "El DJI Mavic Pro es un drone de alta tecnología diseñado para operar en la naturaleza y proporcionar un entorno seguro y confiable.",
      time: "Tiempo de vuelo de 27 min",
      quality: "Grabación y fotos 4K",
      distance: "Distancia máxima de 13 km",
      speed: "Velocidad máxima de 65 km/h",
      weight: "Peso 734 g",
   },
   {
      name: "DJI Neo",
      image: Neo,
      desc: "El DJI Neo es un drone que gracias a su reducido tamaño y peso es ideal para llevarlo a cualquier lugar, además de ser muy fácil de manejar.",
      time: "Tiempo de vuelo de 18 min",
      quality: "Grabación y fotos 4K",
      distance: "Distancia máxima de 7 km",
      speed: "Velocidad máxima de 65 km/h",
      weight: "Peso 135 g",
   },
];

const fpvDrones = [
   {
      name: "Diatone Taycan",
      image: Diatone,
      desc: "El Diatone Taycan es un drone de alta tecnología diseñado para operar en la naturaleza y proporcionar un entorno seguro y confiable.",
      time: "Tiempo de vuelo de 27 min",
      quality: "Grabación y fotos 4K",
      distance: "Distancia máxima de 13 km",
      speed: "Velocidad máxima de 65 km/h",
      weight: "Peso 734 g",
   },
   {
      name: "Freestyle",
      image: Freestyle,
      desc: "El Freestyle es un drone de alta tecnología diseñado para operar en la naturaleza y proporcionar un entorno seguro y confiable.",
      time: "Tiempo de vuelo de 27 min",
      quality: "Grabación y fotos 4K",
      distance: "Distancia máxima de 13 km",
      speed: "Velocidad máxima de 65 km/h",
      weight: "Peso 734 g",
   },
];

const Drones = () => {
   const { t } = useTranslation();
   return (
      <div className="policy-conditions">
         <div className="policy-conditions-container">
            <h2>{t("drones")}</h2>
            <p>{t("drones_info")}</p>
         </div>
         <div className="page-breadcrumb">
            <a href="/PortfolioFalcon">{t("home")}</a>
            <span>/</span>
            <span>{t("drones")}</span>
         </div>
         <div className="drones-info-container">
            <div className="drones-stabilized">
               <h3>{t("drones_stabilized")}</h3>
               <p>{t("drones_stabilized_info")}</p>
               <hr />
               <div className="drones-stabilized-container">
                  {stabilizedDrones.map((drone, index) => (
                     <div key={index} className="drone-stabilized">
                        <img src={drone.image} alt={drone.name} />
                        <h4>{drone.name}</h4>
                        <p>{drone.desc}</p>
                        <div className="drone-stabilized-info">
                           <span><FaClock/>: {drone.time}</span>
                           <span>
                              <FaVideo />: {drone.quality}
                           </span>
                           <span>
                              <FaSignal/>: {drone.distance}
                           </span>
                           <span>
                              <FaRocket/>: {drone.speed}
                           </span>
                           <span>
                              <FaBalanceScale/>: {drone.weight}
                           </span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="drones-fpv">
               <h3>{t("drones_fpv")}</h3>
               <p>{t("drones_fpv_info")}</p>
               <hr />
               <div className="drones-fpv-container">
                  {fpvDrones.map((drone, index) => (
                     <div key={index} className="drone-fpv">
                        <img src={drone.image} alt={drone.name} />
                        <h4>{drone.name}</h4>
                        <p>{drone.desc}</p>
                        <div className="drone-fpv-info">
                           <span><FaClock/>: {drone.time}</span>
                           <span>
                              <FaVideo />: {drone.quality}
                           </span>
                           <span>
                              <FaSignal/>: {drone.distance}
                           </span>
                           <span>
                              <FaRocket/>: {drone.speed}
                           </span>
                           <span>
                              <FaBalanceScale/>: {drone.weight}
                           </span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="drones-fpv-container"></div>
            <div className="drones-fpvracing">
               <h3>{t("drones_fpvracing")}</h3>
               <p>{t("drones_fpvracing_info")}</p>
               <hr />
               <div className="drones-fpvracing-container"></div>
            </div>
         </div>
         <Contact />
      </div>
   );
};

export default Drones;
