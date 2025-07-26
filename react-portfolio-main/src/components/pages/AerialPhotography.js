import React from "react";
import { useTranslation } from "react-i18next";
import aerial from "../../Assets/ServiceImg/aerial.webp"; // Imagen específica del servicio
import aerialmenubg from "../../Assets/ServiceImg/aerial-bg.webp"; // Imagen de fondo de las preguntas
import aerialquestionsbg from "../../Assets/ServiceImg/aerial-qbg.webp"; // Imagen de fondo de las preguntas
import Contact from "../Home/Contact";
import ServiceInfo from "./ServiceInfo";
import Card from "react-bootstrap/Card";
import { Helmet } from "react-helmet";

const AerialPhotography = () => {
   const { t } = useTranslation();

    return (
       <div className="service-container">
          <Helmet>
             <title>Fotografía aérea profesional | Joan Company</title>
             <meta
                name="description"
                content="Fotografía aérea con drones para inmobiliarias, turismo y eventos en Mallorca, con calidad y profesionalidad."
             />
          </Helmet>
          <ServiceInfo
             title={t("aerial_photography")}
             image={aerialmenubg}
             subtitle={t("aerial_photography_desc")}
             description={t("aerial_photography_desc")}
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
                      <h3>{t("aerial_photography_subtitle")}</h3>
                      <div
                         dangerouslySetInnerHTML={{
                            __html: t("aerial_photography_info"),
                         }}
                      />
                   </div>
                   <div className="service-info-image">
                      <img src={aerial} alt={t("aerial_photography")} title={t("aerial_photography")} />
                   </div>
                </div>
             </Card.Body>
          </Card>
          <div
             className="service-questions"
             style={{ backgroundImage: `url(${aerialquestionsbg})` }}
          >
             <div className="service-questions-container">
                <div
                   dangerouslySetInnerHTML={{
                      __html: t("aerial_photography_questions"),
                   }}
                />
             </div>
          </div>
          <Contact />
       </div>
    );
};

export default AerialPhotography;
