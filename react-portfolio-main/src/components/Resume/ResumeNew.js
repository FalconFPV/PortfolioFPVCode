import React, {useState} from "react";
import profilePic from "../../Assets/banner_joancompany.png";
import CircularProgressBar from "./CircularProgressbarCV";
import { FaPaintBrush, FaChartLine, FaCode, FaBullseye, FaLifeRing, FaCamera, FaHelicopter } from "react-icons/fa";
import { skills } from "../../Constants";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { Button } from "react-bootstrap";

// Habilidades técnicas en Español
const habilidadesES = [
   {
      habilidad: "Analítica",
      icon: <FaChartLine />,
      descripcion:
         "Usando datos e insights para optimizar el rendimiento web, mejorar la participación del usuario y hacer crecer el negocio.",
   },
   {
      habilidad: "Diseño Web",
      icon: <FaPaintBrush />,
      descripcion:
         "Creando sitios web atractivos y fáciles de usar para mejorar la experiencia del usuario.",
   },
   {
      habilidad: "Desarrollo Web",
      icon: <FaCode />,
      descripcion:
         "Construyendo aplicaciones web robustas y escalables con un enfoque en funcionalidad y seguridad.",
   },
   {
      habilidad: "Marketing Web",
      icon: <FaBullseye />,
      descripcion:
         "Implementando estrategias de marketing efectivas para aumentar tu presencia en línea.",
   },
   {
      habilidad: "Soporte",
      icon: <FaLifeRing />,
      descripcion:
         "Brindando soporte completo para garantizar el buen funcionamiento de los proyectos web.",
   },
   {
      habilidad: "Edición de vídeo",
      icon: <FaCamera />,
      descripcion:
         "Creando contenido de vídeo profesional y atractivo para promocionar tu marca o productos.",
   },
   {
      habilidad: "Grabación con Drones",
      icon: <FaHelicopter />,
      descripcion:
         "Capturando impresionantes imágenes aéreas para dar una perspectiva única a tus proyectos.",
   },
];

// Habilidades técnicas en Inglés
const habilidadesEN = [
   {
      habilidad: "Analytics",
      icon: <FaChartLine />,
      descripcion:
         "Using data and insights to optimize web performance, enhance user engagement, and drive business growth.",
   },
   {
      habilidad: "Web Design",
      icon: <FaPaintBrush />,
      descripcion:
         "Crafting visually appealing and user-friendly websites that enhance user experience.",
   },
   {
      habilidad: "Web Development",
      icon: <FaCode />,
      descripcion:
         "Building robust and scalable web applications with a focus on functionality and security.",
   },
   {
      habilidad: "Web Marketing",
      icon: <FaBullseye />,
      descripcion:
         "Implementing effective marketing strategies to boost your online presence.",
   },
   {
      habilidad: "Support",
      icon: <FaLifeRing />,
      descripcion:
         "Providing comprehensive support to ensure smooth operation of web projects.",
   },
   {
      habilidad: "Video Editing",
      icon: <FaCamera />,
      descripcion:
         "Creating engaging video content to showcase your brand or products professionally.",
   },
   {
      habilidad: "Drone Filming",
      icon: <FaHelicopter />,
      descripcion:
         "Capturing stunning aerial footage to give a unique perspective to your projects.",
   },
];

// Datos en Español
const perfilES = {
   nombre: "Joan Company Pastor",
   email: "joanfpv@gmail.com",
   linkedin: "https://www.linkedin.com/in/joan-company-pastor-b5aa6b27b/",
   portfolio: "https://falconfpv.github.io/Portfolio/",
   fechaNacimiento: "21",
   vehiculo: "Carné de conducir B",
};

const experienciaLaboralES = [
  { fecha: "May 2022 - Jul 2022", puesto: "Reponedor - Cajero", empresa: "Mercadona S.A, Alcúdia" },
  { fecha: "Jun 2023 - Sept 2023", puesto: "Recepcionista", empresa: "Belive Hotels, Palace de Muro" },
  { fecha: "Mar 2024 - Presente", puesto: "Desarrollador Web Frontend", empresa: "Juniper Travel Technology" },
];

const datosAcademicosES = [
  { fecha: "2019 - 2021", titulo: "Bachillerato Científico", institucion: "IES Alcúdia, Alcúdia" },
  { fecha: "Sept 2021 - Jun 2022", titulo: "Ingeniería Informática", institucion: "Universitat de les Illes Balears" },
  { fecha: "Sept 2022 - Mar 2024", titulo: "Grado Superior en Desarrollo de Aplicaciones Web", institucion: "CIFP Pau Casesnoves, Inca" },
];

// Datos en Inglés
const perfilEN = {
   nombre: "Joan Company Pastor",
   email: "joanfpv@gmail.com",
   linkedin: "https://www.linkedin.com/in/joan-company-pastor-b5aa6b27b/",
   portfolio: "https://falconfpv.github.io/Portfolio/",
   fechaNacimiento: "21",
   vehiculo: "Driver's license B",
};

const experienciaLaboralEN = [
  { fecha: "May 2022 - Jul 2022", puesto: "Stocker - Cashier", empresa: "Mercadona S.A, Alcúdia" },
  { fecha: "Jun 2023 - Sept 2023", puesto: "Receptionist", empresa: "Belive Hotels, Palace de Muro" },
  { fecha: "Mar 2024 - Present", puesto: "Frontend Web Developer", empresa: "Juniper Travel Technology" },
];

const datosAcademicosEN = [
  { fecha: "2019 - 2021", titulo: "Scientific Baccalaureate", institucion: "IES Alcúdia, Alcúdia" },
  { fecha: "Sept 2021 - Jun 2022", titulo: "Computer Engineering", institucion: "University of the Balearic Islands" },
  { fecha: "Sept 2022 - Mar 2024", titulo: "Higher Degree in Web Application Development", institucion: "CIFP Pau Casesnoves, Inca" },
];

// Certificados
const certificadosES = [
   {
      fecha: "2024",
      titulo: "Curso de React Avanzado",
      institucion: "OpenWebinars",
      link: "https://openwebinars.net/cert/EbAH",
   },
   {
      fecha: "2024",
      titulo: "Google Analytics",
      institucion: "Google Skillshop",
      link: "https://skillshop.credential.net/af561d09-2002-4e04-a582-1b3523780970",
   },
   {
      fecha: "2021",
      titulo: "Inglés B2",
      institucion: "British Council",
   },
];

const certificadosEN = [
   {
      fecha: "2024",
      titulo: "Advanced React Course",
      institucion: "OpenWebinars",
      link: "https://openwebinars.net/cert/EbAH",
   },
   {
      fecha: "2024",
      titulo: "Google Analytics",
      institucion: "Google Skillshop",
      link: "https://skillshop.credential.net/af561d09-2002-4e04-a582-1b3523780970",
   },
   {
      fecha: "2021",
      titulo: "English B2",
      institucion: "British Council",
   },
];

// Idiomas
const idiomasES = [
  { idioma: "Catalán", nivel: "Nativo" },
  { idioma: "Castellano", nivel: "Nativo" },
  { idioma: "Inglés", nivel: "Conversacional / Profesional" },
];

const idiomasEN = [
  { idioma: "Catalan", nivel: "Native" },
  { idioma: "Spanish", nivel: "Native" },
  { idioma: "English", nivel: "Conversational / Professional" },
];


const Resumenew = () => {
   // Estado para el idioma
   const [language, setLanguage] = useState("ES");

   // Selecciona los datos en función del idioma
   const perfil = language === "ES" ? perfilES : perfilEN;
   const experienciaLaboral =
      language === "ES" ? experienciaLaboralES : experienciaLaboralEN;
   const datosAcademicos =
      language === "ES" ? datosAcademicosES : datosAcademicosEN;
   const certificados = language === "ES" ? certificadosES : certificadosEN;
   const idiomas = language === "ES" ? idiomasES : idiomasEN;
   const habilidades = language === "ES" ? habilidadesES : habilidadesEN;

   // Función para cambiar el idioma
   const toggleLanguage = () => {
      setLanguage((prevLang) => (prevLang === "ES" ? "EN" : "ES"));
   };

   return (
      <div className="cv">
         <div className="cv-container">
            <div className="cv-sidebar">
               <div className="cv-photo">
                  <img src={profilePic} alt="Profile" />
               </div>
               <div className="cv-info">
                  <h1>{perfil.nombre}</h1>
                  <div className="cv-section-sidebar">
                     <h3>
                        {language === "ES"
                           ? "Datos Personales"
                           : "Personal Info"}
                     </h3>
                     <ul className="cv-info-list">
                        <li id="cv-mail">
                           <MdEmail />
                           <strong>{perfil.email}</strong>
                        </li>
                        <li id="cv-lk">
                           <FaLinkedinIn />
                           <a
                              href={perfil.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <strong>Linkedin</strong>
                           </a>
                        </li>
                        <li id="cv-port">
                           <FaUserGraduate />
                           <a
                              href={perfil.portfolio}
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <strong>Portfolio</strong>
                           </a>
                        </li>
                        <li id="cv-birth">
                           <FaUser />{" "}
                           <strong>
                              {language === "ES" ? "Edad" : "Age"}:
                           </strong>
                           {perfil.fechaNacimiento}
                        </li>
                        <li id="cv-car">
                           <FaCar /> <strong>{perfil.vehiculo}</strong>
                        </li>
                     </ul>
                  </div>

                  {/* Idiomas */}
                  <div className="cv-section-sidebar">
                     <h3>{language === "ES" ? "Idiomas" : "Languages"}</h3>
                     <ul className="cv-languages">
                        {idiomas.map((idioma, index) => (
                           <li key={index}>
                              <strong>{idioma.idioma}:</strong> {idioma.nivel}
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Certificados */}
                  <div className="cv-section-sidebar">
                     <h3>
                        {language === "ES" ? "Certificados" : "Certificates"}
                     </h3>
                     <ul className="cv-certificates">
                        {certificados.map((certificado, index) => (
                           <li key={index}>
                              <div className="cv-content">
                                 <a
                                    href={certificado.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    <strong>{certificado.titulo}</strong>
                                    <br />
                                    {certificado.institucion} -{" "}
                                    {certificado.fecha}
                                 </a>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
                  {/* Habilidades */}
                  <div className="cv-section-sidebar">
                     <h3>{language === "ES" ? "Habilidades" : "Skills"}</h3>
                     <ul className="cv-skills">
                        {habilidades.map((habilidad, index) => (
                           <li key={index} className="cv-skills-list">
                              {habilidad.icon}
                              <strong>{habilidad.habilidad}</strong>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

            <div className="cv-content-container">
               {/* Experiencia Laboral */}
               <div className="cv-section">
                  <h2>
                     {language === "ES"
                        ? "Experiencia Laboral"
                        : "Work Experience"}
                  </h2>
                  {experienciaLaboral.map((trabajo, index) => (
                     <div className="cv-row" key={index}>
                        <div className="cv-exp-sidebar"></div>
                        <div className="cv-row-content">
                           <div className="cv-date">{trabajo.fecha}</div>
                           <div className="cv-content">
                              <p>
                                 <strong>{trabajo.puesto}</strong>
                                 <br />
                                 {trabajo.empresa}
                              </p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               {/* Datos Académicos */}
               <div className="cv-section">
                  <h2>
                     {language === "ES"
                        ? "Datos Académicos"
                        : "Academic Background"}
                  </h2>
                  {datosAcademicos.map((estudio, index) => (
                     <div className="cv-row" key={index}>
                        <div className="cv-exp-sidebar"></div>
                        <div className="cv-row-content">
                           <div className="cv-date">{estudio.fecha}</div>
                           <div className="cv-content">
                              <p>
                                 <strong>{estudio.titulo}</strong>
                                 <br />
                                 {estudio.institucion}
                              </p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               {/* Habilidades */}
               {/* <div className="cv-section">
                  <h2>{language === "ES" ? "Habilidades" : "Skills"}</h2>
                  {habilidades.map((habilidad, index) => (
                     <div className="cv-row" key={index}>
                        <div className="cv-content">
                           <p>
                              <span className="hab-title">
                                 <span>{habilidad.icon}</span>
                                 <strong>{habilidad.habilidad}</strong>
                              </span>
                              <br />
                              <span className="hab-desc">
                                 {habilidad.descripcion}
                              </span>
                           </p>
                        </div>
                     </div>
                  ))}
               </div> */}

               {/* Habilidades de desarrollo */}
               <div className="skills-cv">
                  <div className="skills-cv-container">
                     <h2>
                        {language === "ES"
                           ? "Habilidades de Desarrollo"
                           : "Development Skills"}
                     </h2>
                     <div className="skills-container">
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
                  </div>
               </div>
            </div>
         </div>
         {/* Botón para cambiar idioma */}
         <Button id="selector-idioma" onClick={toggleLanguage}>
            {language === "ES" ? "Cambiar a Inglés 🇬🇧" : "Change to Spanish 🇪🇸"}
         </Button>
         <Button id="selector-idioma" onClick={() => window.print()}>
            Imprimir CV 🖨️
         </Button>
      </div>
   );
};

export default Resumenew;
