import React from "react";
import Card from "react-bootstrap/Card";
import Drone5inch from "../../Assets/Drones/fpv.png";
import Drone3inch from "../../Assets/Drones/diatone.png";
import MavicPro from "../../Assets/Drones/mavic.png";
import Neo from "../../Assets/Drones/neo.png";
import Pavo from "../../Assets/Drones/pavo.png";
import { useTranslation } from "react-i18next";
import CircularGallery from "./CircularGallery";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Ovonic from "../../Assets/Sponsors/ovonic.png";
import Diatone from "../../Assets/Sponsors/Diatone.png";
import FolienrabeLogo from "../../Assets/Sponsors/FolienrabeLogo.png";
import Gemfan from "../../Assets/Sponsors/Gemfan.png";
import iflight from "../../Assets/Sponsors/iflight.png";
import Runcam from "../../Assets/Sponsors/Runcam.png";
import SkyDrone from "../../Assets/Sponsors/SkyDrone.png";
import Tmotor from "../../Assets/Sponsors/T-Motor.png";
import Meps from "../../Assets/Sponsors/meps.png";
import SponsorsWall from "./SponsorsWall";

function DroneFleet() {
   const { t } = useTranslation();

      const DronesNew = [
         {
            text: t("fpv_5"),
            image: Drone5inch,
            desc: t("fpv_5_desc"),
         },
         {
            text: t("fpv_3"),
            image: Drone3inch,
            desc: t("fpv_3_desc"),
         },
         {
            text: t("pavo"),
            image: Pavo,
            desc: t("pavo_desc"),
         },
         {
            text: t("mavic_pro"),
            image: MavicPro,
            desc: t("mavic_pro_desc"),
         },
         {
            text: t("dji_neo"),
            image: Neo,
            desc: t("dji_neo_desc"),
         },
      ];
   
   const sponsors = [
      {
         name: "Ovonic",
         image: Ovonic,
      }
      ,
      {
          name: "Diatone",
         image: Diatone,
      }
      ,
      {
         name: "Folienrabe",
         image: FolienrabeLogo,
      }
       ,
      {
         name: "Gemfan",
         image: Gemfan,
      }
       ,
      {
         name: "Runcam",
         image: Runcam,
      }
       ,
      {
         name: "SkyDrone",
         image: SkyDrone,
      }
       ,
      {
         name: "T-Hobby",
         image: Tmotor,
      }
       ,
      {
         name: "MEPS",
         image: Meps,
      },
      {
         name: "iFlight",
         image: iflight,
      }
   ];

   return (
      <Card
         className="quote-card-view"
         id="fleet"
         data-aos="fade-up"
         data-aos-duration="2000"
      >
         <Card.Body>
            <div className="drone-card-container">
               <div className="drones">
                  <h1>{t("fleet_title")}</h1>
                  <div className="cert-container">
                     <div className="drones-container">
                        <div className="drones-info">
                           <div
                              dangerouslySetInnerHTML={{
                                 __html: t("drones_desc"),
                              }}
                           />
                           <Link to={"/drones"} className="drones-btn">
                              {t("fleet_btn")}
                              <AiOutlineArrowRight />
                           </Link>
                        </div>
                        <div
                           className="droneGallery-container"
                           style={{ width: "100%", height: "500px" }}
                        >
                           <CircularGallery
                              items={DronesNew}
                              bend={0.6}
                              textColor="#ffffff"
                              borderRadius={0.08}
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="sponsors-container">
               <h2>{t("sponsors")}</h2>
               <p>{t("sponsors_desc")}</p>
               <SponsorsWall
                  items={sponsors}
                  direction="horizontal"
                  pauseOnHover={false}
               />
            </div>
         </Card.Body>
      </Card>
   );
}

export default DroneFleet;
