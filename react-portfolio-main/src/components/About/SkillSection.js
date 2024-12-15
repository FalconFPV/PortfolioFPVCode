import React from "react";
import {
   FaPaintBrush,
   FaBullhorn,
   FaChartLine,
   FaCode,
   FaBullseye,
   FaLifeRing,
   FaCamera,
   FaHelicopter,
} from "react-icons/fa";
// Importar iconos lenguajes
import CircularProgressBar from "./CircularProgressbar";
import ServiceCard from "./ServiceCard";
import CertificationCard from "./CertificationCard";
import ReactCert from "../../Assets/Certificates/react.png";
import GoogleCert from "../../Assets/Certificates/ganalytics.png";
import B2Cert from "../../Assets/Certificates/b2english.png";
import PauCert from "../../Assets/Certificates/pau.png";
import UocCert from "../../Assets/Certificates/uoc.png";
import { skills } from "../../Constants";

// Color base
var orange = "var(--imp-text-color)";

const frameworks = [
   { name: "Laravel", percentage: 90, color: orange },
   { name: "React", percentage: 90, color: orange },
];

const habilities = [
   { name: "Design and responsive designs", percentage: 95, color: orange },
   { name: "GIT versions control management", percentage: 100, color: orange },
   {
      name: "Azure-Devops versions control management",
      percentage: 95,
      color: orange,
   },
];

const services = [
   {
      name: "Web Design",
      icon: <FaPaintBrush />, // Ícono de diseño web
      desc: "Crafting visually appealing and user-friendly websites that engage visitors and enhance user experience.",
   },
   {
      name: "Branding",
      icon: <FaBullhorn />, // Ícono de branding
      desc: "Developing strong, memorable brand identities that effectively communicate your message and values.",
   },
   {
      name: "Analytics",
      icon: <FaChartLine />, // Ícono de analytics
      desc: "Using data and insights to optimize web performance, enhance user engagement, and drive business growth.",
   },
   {
      name: "Web Development",
      icon: <FaCode />, // Ícono de desarrollo web
      desc: "Building robust and scalable web applications with a focus on functionality, performance, and security.",
   },
   {
      name: "Web Marketing",
      icon: <FaBullseye />, // Ícono de marketing web
      desc: "Implementing effective marketing strategies to boost your online presence and reach your target audience.",
   },
   {
      name: "Support",
      icon: <FaLifeRing />, // Ícono de soporte
      desc: "Providing comprehensive support and solutions to ensure smooth operation and maintenance of your web projects.",
   },
   {
      name: "Video Editing",
      icon: <FaCamera />, // Ícono de fotografía
      desc: "Creating engaging video content that showcases your brand, products, or services in a professional and compelling way.",
   },
   {
      name: "Drone Footage",
      icon: <FaHelicopter />, // Ícono de fotografía
      desc: "Capturing stunning aerial footage and images to add a unique perspective to your projects and marketing materials.",
   },
];

const certifications = [
   {
      name: "React Advanced Course Certificate",
      img: ReactCert,
      desc: "Certificate of completion for the React Advanced course by OpenWebinars.",
      url: "https://openwebinars.net/cert/EbAH",
   },
   {
      name: "Google Analytics (GA4)",
      img: GoogleCert,
      desc: "Certificate of completion for the Google Analytics (GA4) course by Google.",
      url: "https://skillshop.credential.net/af561d09-2002-4e04-a582-1b3523780970",
   },
   {
      name: "English B2 Certificate",
      img: B2Cert,
      desc: "Certificate of completion B2 level of English by the Official Language School (British Council)",
      url: "none",
   },
   {
      name: "Higher Technician in Web Development",
      img: PauCert,
      desc: "Advanced Diploma in Web Application Development by CIFP Pau Casesnoves",
      url: "https://paucasesnovescifp.cat/?page_id=8586",
   },
   {
      name: "Web Analytics, Monitoring, SEO and SEM",
      img: UocCert,
      desc: "UOC's Professional Course in Web Analytics, SEO, and Search Engine Marketing.",
      url: "https://paucasesnovescifp.cat/?page_id=8586",
   },
];


const SkillsSection = () => {
   return (
      <div>
         <h1>Technichal Skills</h1>
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
         </div>
         <div className="frame-hab-container">
            {/* <div className="frameworks">
               <h2>Frameworks</h2>
               {frameworks.map((framework, index) => (
                  <ProgressBar
                     key={index}
                     label={framework.name}
                     percentage={framework.percentage}
                     color={framework.color}
                  />
               ))}
            </div> */}
            <div className="habilities">
               <h1>Habilities</h1>
               {/* {habilities.map((hability, index) => (
                  <ProgressBar
                     key={index}
                     label={hability.name}
                     percentage={hability.percentage}
                     color={hability.color}
                  />
               ))} */}
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
         <div className="certifications">
            <h1>Certifications</h1>
            <div className="cert-container">
               {certifications.map((certification, index) => (
                  <CertificationCard
                     key={index}
                     name={certification.name}
                     img={certification.img}
                     desc={certification.desc}
                     url={certification.url}
                     delay={`${index * 0.1}s`} 
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default SkillsSection;
