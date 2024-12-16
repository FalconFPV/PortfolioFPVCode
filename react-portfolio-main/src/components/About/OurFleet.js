import React, { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import CertificationCard from "./CertificationCard";
import Drone5inch from "../../Assets/Drones/fpv.jpeg";
import Drone3inch from "../../Assets/Drones/diatone.webp";
import MavicPro from "../../Assets/Drones/mavic.jpg";
import Neo from "../../Assets/Drones/neo.png";

const Drones = [
   {
      name: '5" FPV Drone',
      img: Drone5inch, // Cambia este por la imagen correspondiente al drone
      desc: "Ideal for high-speed and dynamic shots, perfect for action sports, cinematic sequences, and indoor filming.",
   },
   {
      name: '3" FPV Drone',
      img: Drone3inch, // Cambia este por la imagen correspondiente al drone
      desc: "Compact and agile, designed for filming in tight spaces or capturing unique angles in confined environments.",
   },
   {
      name: "DJI Mavic Pro",
      img: MavicPro, // Cambia este por la imagen correspondiente al drone
      desc: "The best option for capturing smooth and stable footage for professional videography and landscapes.",
   },
   {
      name: "DJI Neo",
      img: Neo, // Cambia este por la imagen correspondiente al drone
      desc: "Perfect for indoor use, providing precise and safe maneuverability in enclosed spaces with high-quality results.",
   },
];

function DroneFleet() {

   return (
      <Card className="quote-card-view" id="fleet">
         <Card.Body>
            <div className="drone-card-container">
               <div className="drones">
                  <h1>Our fleet</h1>
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
