import React from "react";
import Card from "react-bootstrap/Card";
import Drone5inch from "../../Assets/Drones/fpv.jpg";
import Drone3inch from "../../Assets/Drones/diatone.jpg";
import MavicPro from "../../Assets/Drones/mavic.jpg";
import Neo from "../../Assets/Drones/neo.jpg";
import { useTranslation } from "react-i18next";
import CircularGallery from "./CircularGallery";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import BrutePower from "../../Assets/Sponsors/BrutePower.png";
import Diatone from "../../Assets/Sponsors/Diatone.png";
import FolienrabeLogo from "../../Assets/Sponsors/FolienrabeLogo.png";
import Gemfan from "../../Assets/Sponsors/Gemfan.png";
import iHobbies from "../../Assets/Sponsors/iHobbies.png";
import RacingStuffLogo from "../../Assets/Sponsors/RacingstuffLogo.png";
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
         name: "Brute Power",
         image: BrutePower,
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
         name: "iHobbies",
         image: iHobbies,
      }
       ,
      {
         name: "RacingStuff",
         image: RacingStuffLogo,
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
         name: "T-motor",
         image: Tmotor,
      }
       ,
      {
         name: "MEPS",
         image: Meps,
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
