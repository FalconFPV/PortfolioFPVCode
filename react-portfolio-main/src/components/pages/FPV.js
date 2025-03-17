import React from "react";
import { useTranslation } from "react-i18next";
import fpvImg from "../../Assets/ServiceImg/fpv.webp"; // Imagen del servicio
import fpvmenubg from "../../Assets/ServiceImg/fpv-bg.webp"; // Imagen de fondo de las preguntas
import fpvquestionsbg from "../../Assets/ServiceImg/fpv-qbg.webp"; // Imagen de fondo de las preguntas
import Contact from "../Home/Contact";
import ServiceInfo from "./ServiceInfo";
import Card from "react-bootstrap/Card";

const FPV = () => {
   const { t } = useTranslation();

    return (
       <div className="service-container">
          <ServiceInfo
             title={t("fpv")}
             image={fpvmenubg}
             subtitle={t("fpv_desc")}
             description={t("fpv_desc")}
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
                      <h3>{t("fpv_subtitle")}</h3>
                      <div
                         dangerouslySetInnerHTML={{
                            __html: t("fpv_info"),
                         }}
                      />
                   </div>
                   <div className="service-info-image">
                      <img src={fpvImg} alt={t("fpv")} />
                   </div>
                </div>
             </Card.Body>
          </Card>
          <div
             className="service-questions"
             style={{ backgroundImage: `url(${fpvquestionsbg})` }}
          >
             <div className="service-questions-container">
                <div
                   dangerouslySetInnerHTML={{
                      __html: t("fpv_questions"),
                   }}
                />
             </div>
          </div>
          <Contact />
       </div>
    );
};

export default FPV;
