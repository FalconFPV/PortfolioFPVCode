import React, { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import CertificationCard from "./CertificationCard";
import Drone5inch from "../../Assets/Drones/fpv.jpeg";
import Drone3inch from "../../Assets/Drones/diatone.webp";
import MavicPro from "../../Assets/Drones/mavic.jpg";
import Neo from "../../Assets/Drones/neo.png";
import { useTranslation } from "react-i18next";

function DroneFleet() {
   const { t } = useTranslation();
   
   const Drones = [
      {
         name: t("fpv_5"),
         img: Drone5inch, // Cambia este por la imagen correspondiente al drone
         desc: t("fpv_5_desc"),
      },
      {
         name: t("fpv_3"),
         img: Drone3inch, // Cambia este por la imagen correspondiente al drone
         desc: t("fpv_3_desc"),
      },
      {
         name: t("mavic_pro"),
         img: MavicPro, // Cambia este por la imagen correspondiente al drone
         desc: t("mavic_pro_desc"),
      },
      {
         name: t("dji_neo"),
         img: Neo, // Cambia este por la imagen correspondiente al drone
         desc: t("dji_neo_desc"),
      },
   ];

   return (
      <Card className="quote-card-view" id="fleet" data-aos="fade-up" data-aos-duration="2000">
         <Card.Body>
            <div className="drone-card-container">
               <div className="drones">
                  <h1>{t("fleet_title")}</h1>
                  <div className="cert-container">
                     {Drones.map((certification, index) => (
                        <CertificationCard
                           key={index}
                           name={certification.name}
                           img={certification.img}
                           desc={certification.desc}
                           delay={`${index * 0.1}s`}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </Card.Body>
      </Card>
   );
}

export default DroneFleet;
