import React from "react";
import { useTranslation } from "react-i18next";
import Contact from "../Home/Contact";
import Neo from "../../Assets/Drones/neoinfo.png";
import Mavic from "../../Assets/Drones/mavicinfo.png";
import Diatone from "../../Assets/Drones/diatoneh.png";
import Freestyle from "../../Assets/Drones/fpvh.png";
import Pavo from "../../Assets/Drones/pavo.png";
import Racing from "../../Assets/Drones/racing.png";
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
         name: t("drones_content.mavic_n"),
         image: Mavic,
         desc: t("drones_content.mavic_desc"),
         time: t("drones_content.mavic_ft"),
         quality: t("drones_content.mavic_q"),
         distance: t("drones_content.mavic_d"),
         speed: t("drones_content.mavic_v"),
         weight: t("drones_content.mavic_w"),
      },
      {
         name: t("drones_content.neo_n"),
         image: Neo,
         desc: t("drones_content.neo_desc"),
         time: t("drones_content.neo_ft"),
         quality: t("drones_content.neo_q"),
         distance: t("drones_content.neo_d"),
         speed: t("drones_content.neo_v"),
         weight: t("drones_content.neo_w"),
      },
   ];

   const fpvDrones = [
      {
         name: t("drones_content.diatone_n"),
         image: Diatone,
         desc: t("drones_content.diatone_desc"),
         time: t("drones_content.diatone_ft"),
         quality: t("drones_content.diatone_q"),
         distance: t("drones_content.diatone_d"),
         speed: t("drones_content.diatone_v"),
         weight: t("drones_content.diatone_w"),
      },
      {
         name: t("drones_content.tbp_n"),
         image: Freestyle,
         desc: t("drones_content.tbp_desc"),
         time: t("drones_content.tbp_ft"),
         quality: t("drones_content.tbp_q"),
         distance: t("drones_content.tbp_d"),
         speed: t("drones_content.tbp_v"),
         weight: t("drones_content.tbp_w"),
      },
      {
         name: t("drones_content.pavo_n"),
         image: Pavo,
         desc: t("drones_content.pavo_desc"),
         time: t("drones_content.pavo_ft"),
         quality: t("drones_content.pavo_q"),
         distance: t("drones_content.pavo_d"),
         speed: t("drones_content.pavo_v"),
         weight: t("drones_content.pavo_w"),
      },
   ];

   const racingDrones = [
      {
         name: t("drones_content.race_n"),
         image: Racing,
         desc: t("drones_content.race_desc"),
         time: t("drones_content.race_ft"),
         quality: t("drones_content.race_q"),
         distance: t("drones_content.race_d"),
         speed: t("drones_content.race_v"),
         weight: t("drones_content.race_w"),
      },
   ];
   
   return (
      <div className="policy-conditions" id="drones">
         <div className="policy-conditions-container">
            <h2>{t("drones")}</h2>
            <p>{t("drones_info")}</p>
         </div>
         <div className="page-breadcrumb">
            <a href="/">{t("home")}</a>
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
