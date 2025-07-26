import React from "react";
import { useTranslation } from "react-i18next";
import inspectionImg from "../../Assets/ServiceImg/inspec.webp"; // Imagen del servicio
import Contact from "../Home/Contact";
import ServiceInfo from "./ServiceInfo";
import Card from "react-bootstrap/Card";

const Inspections = () => {
   const { t } = useTranslation();

    return (
       <div className="service-container">
          <ServiceInfo
             title={t("inspections_surveys")}
             image={inspectionImg}
             subtitle={t("inspections_surveys_desc")}
             description={t("inspections_surveys_desc")}
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
                      <h3>{t("inspections_surveys_subtitle")}</h3>
                      <div
                         dangerouslySetInnerHTML={{
                            __html: t("inspections_surveys_info"),
                         }}
                      />
                   </div>
                   <div className="service-info-image">
                      <img src={inspectionImg} alt={t("inspections_surveys")} title={t("inspections_surveys")} />
                   </div>
                </div>
             </Card.Body>
          </Card>
          <div
             className="service-questions"
             style={{ backgroundImage: `url(${inspectionImg})` }}
          >
             <div className="service-questions-container">
                <div
                   dangerouslySetInnerHTML={{
                      __html: t("inspections_surveys_questions"),
                   }}
                />
             </div>
          </div>
          <Contact />
       </div>
    );
};

export default Inspections;
