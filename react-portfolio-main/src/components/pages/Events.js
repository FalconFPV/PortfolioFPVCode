import React from "react";
import { useTranslation } from "react-i18next";
import eventImg from "../../Assets/ServiceImg/wedding.webp"; // Imagen del servicio
import eventmenubg from "../../Assets/ServiceImg/event-bg.webp"; // Imagen de fondo de las preguntas
import eventquestionsbg from "../../Assets/ServiceImg/event-qbg.webp"; // Imagen de fondo de las preguntas
import Contact from "../Home/Contact";
import ServiceInfo from "./ServiceInfo";
import Card from "react-bootstrap/Card";
import { Helmet } from "react-helmet";

const Events = () => {
   const { t } = useTranslation();

   return (
      <div className="service-container">
         <Helmet>
            <title>Grabación de eventos con drones | Joan Company</title>
            <meta
               name="description"
               content="Cobertura aérea para eventos, bodas, conciertos y celebraciones con drones para capturar momentos únicos."
            />
         </Helmet>
         <ServiceInfo
            title={t("event_coverage")}
            image={eventmenubg}
            subtitle={t("event_coverage_desc")}
            description={t("event_coverage_desc")}
         />
         <Card
            className="quote-card-view"
            id="service-info-card"
            data-aos="fade-up"
            data-aos-duration="2000"
         >
            <Card.Body>
               <div className="service-info-content-container">
                  <div className="service-info-content">
                     <h3>{t("event_coverage_subtitle")}</h3>
                     <div
                        dangerouslySetInnerHTML={{
                           __html: t("event_coverage_info"),
                        }}
                     />
                  </div>
                  <div className="service-info-image">
                     <img src={eventImg} alt={t("event_coverage")} title={t("event_coverage")} />
                  </div>
               </div>
            </Card.Body>
         </Card>
         <div
            className="service-questions"
            style={{ backgroundImage: `url(${eventquestionsbg})` }}
         >
            <div className="service-questions-container">
               <div
                  dangerouslySetInnerHTML={{
                     __html: t("event_coverage_questions"),
                  }}
               />
            </div>
         </div>
         <Contact />
      </div>
   );
};

export default Events;
