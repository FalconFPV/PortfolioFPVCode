import React from "react";
import { useTranslation } from "react-i18next";
import Contact from "../Home/Contact";
import Neo from "../../Assets/Drones/neoinfo.jpg";
import Mavic from "../../Assets/Drones/mavicinfo.jpg";
import Diatone from "../../Assets/Drones/diatoneh.jpg";
import Freestyle from "../../Assets/Drones/fpvh.jpg";
import Racing from "../../Assets/Drones/racing.jpg";
import { useState } from "react";

import { FaBalanceScale, FaClock, FaRocket, FaSignal, FaVideo } from "react-icons/fa";

const Drones = () => {
   const { t } = useTranslation();
   const [loadedImages, setLoadedImages] = useState({});

   const handleImageLoad = (index) => {
      setLoadedImages((prev) => ({ ...prev, [index]: true }));
   };

   const stabilizedDrones = [
      {
         name: "DJI Mavic Pro",
         image: Mavic,
         desc: "El DJI Mavic Pro es un drone de alta tecnología diseñado para operar en la naturaleza y proporcionar un entorno seguro y confiable.",
         time: "Tiempo de vuelo de 27 min",
         quality: "Grabación de video y fotos 4K",
         distance: "Distancia máxima de 13 km",
         speed: "Velocidad máxima de 65 km/h",
         weight: "Peso 734 g",
      },
      {
         name: "DJI Neo",
         image: Neo,
         desc: "El DJI Neo es un drone que gracias a su reducido tamaño y peso es ideal para llevarlo a cualquier lugar, además de ser muy fácil de manejar.",
         time: "Tiempo de vuelo de 18 min",
         quality: "Grabación de video y fotos 4K",
         distance: "Distancia máxima de 7 km",
         speed: "Velocidad máxima de 65 km/h",
         weight: "Peso 135 g",
      },
   ];

   const fpvDrones = [
      {
         name: 'Diatone Taycan (3")',
         image: Diatone,
         desc: "El Diatone Taycan es un drone de alta tecnología diseñado para operar en espacios más reducidos y proporcionar un entorno seguro y confiable.",
         time: "Tiempo de vuelo de 8 min",
         quality: "Grabación de video y fotos 4K (GoPro)",
         distance: "Distancia máxima de 5 km",
         speed: "Velocidad máxima de 100 km/h",
         weight: "Peso 380 g (sin GoPro)",
      },
      {
         name: 'TBP Freestyle (5")',
         image: Freestyle,
         desc: "El TBP Freestyle es un drone de alta tecnología diseñado para operar en la naturaleza y proporcionar un entorno seguro y confiable.",
         time: "Tiempo de vuelo de 8 min",
         quality: "Grabación de video y fotos 4K (GoPro)",
         distance: "Distancia máxima de 10 km",
         speed: "Velocidad máxima de 150 km/h",
         weight: "Peso 354 g (sin GoPro)",
      },
   ];

   const racingDrones = [
      {
         name: "SkyX - FalconFPV",
         image: Racing,
         desc: "Mi drone de carreras personalizado, diseñado para competir en carreras de drones y proporcionar las máximas prestaciones de velocidad y baja latencia.",
         time: "Tiempo de vuelo (carrera) de 2 min",
         quality: "Grabación de video Analógica (DVR)",
         distance: "Distancia máxima de 5 km",
         speed: "Velocidad máxima de 230 km/h",
         weight: "Peso 220 g",
      },
   ];
   
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
            <div
               className="drones-stabilized"
               data-aos="fade-up"
               data-aos-duration="2000"
            >
               <h3>{t("drones_stabilized")}</h3>
               <p>{t("drones_stabilized_info")}</p>
               <hr />
               <div className="drones-stabilized-container">
                  {stabilizedDrones.map((drone, index) => (
                     <div key={index} className="drone-stabilized">
                        <div className="drone-img">
                           {!loadedImages[index] && (
                              <div className="skeleton-loader"></div>
                           )}
                           <img
                              src={drone.image}
                              alt={drone.name}
                              onLoad={() => handleImageLoad(index)}
                              style={{
                                 display: loadedImages[index]
                                    ? "block"
                                    : "none",
                              }}
                           />
                        </div>
                        <h4>{drone.name}</h4>
                        <p>{drone.desc}</p>
                        <div className="drone-stabilized-info">
                           <span>
                              <FaClock /> {drone.time}
                           </span>
                           <span>
                              <FaVideo /> {drone.quality}
                           </span>
                           <span>
                              <FaSignal /> {drone.distance}
                           </span>
                           <span>
                              <FaRocket /> {drone.speed}
                           </span>
                           <span>
                              <FaBalanceScale /> {drone.weight}
                           </span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div
               className="drones-fpv"
               data-aos="fade-up"
               data-aos-duration="2000"
            >
               <h3>{t("drones_fpv")}</h3>
               <p>{t("drones_fpv_info")}</p>
               <hr />
               <div className="drones-fpv-container">
                  {fpvDrones.map((drone, index) => (
                     <div key={index} className="drone-fpv">
                        <div className="drone-img">
                           {!loadedImages[index] && (
                              <div className="skeleton-loader"></div>
                           )}
                           <img
                              src={drone.image}
                              alt={drone.name}
                              onLoad={() => handleImageLoad(index)}
                              style={{
                                 display: loadedImages[index]
                                    ? "block"
                                    : "none",
                              }}
                           />
                        </div>
                        <h4>{drone.name}</h4>
                        <p>{drone.desc}</p>
                        <div className="drone-fpv-info">
                           <span>
                              <FaClock /> {drone.time}
                           </span>
                           <span>
                              <FaVideo /> {drone.quality}
                           </span>
                           <span>
                              <FaSignal /> {drone.distance}
                           </span>
                           <span>
                              <FaRocket /> {drone.speed}
                           </span>
                           <span>
                              <FaBalanceScale /> {drone.weight}
                           </span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="drones-fpv-container"></div>
            <div
               className="drones-fpvracing"
               data-aos="fade-up"
               data-aos-duration="2000"
            >
               <h3>{t("drones_fpvracing")}</h3>
               <p>{t("drones_fpvracing_info")}</p>
               <hr />
               <div className="drones-fpvracing-container">
                  {racingDrones.map((drone, index) => (
                     <div key={index} className="drone-fpvracing">
                        <div className="drone-img">
                           {!loadedImages[index] && (
                              <div className="skeleton-loader"></div>
                           )}
                           <img
                              src={drone.image}
                              alt={drone.name}
                              onLoad={() => handleImageLoad(index)}
                              style={{
                                 display: loadedImages[index]
                                    ? "block"
                                    : "none",
                              }}
                           />
                        </div>
                        <h4>{drone.name}</h4>
                        <p>{drone.desc}</p>
                        <div className="drone-fpvracing-info">
                           <span>
                              <FaClock /> {drone.time}
                           </span>
                           <span>
                              <FaVideo /> {drone.quality}
                           </span>
                           <span>
                              <FaSignal /> {drone.distance}
                           </span>
                           <span>
                              <FaRocket /> {drone.speed}
                           </span>
                           <span>
                              <FaBalanceScale /> {drone.weight}
                           </span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <Contact />
      </div>
   );
};

export default Drones;
