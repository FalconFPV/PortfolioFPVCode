import React from "react";
import { useTranslation } from "react-i18next";
import aerial from "../../Assets/ServiceImg/aerial.jpeg"; // Imagen específica del servicio
import Contact from "../Home/Contact";
import ServiceInfo from "./ServiceInfo";
import Card from "react-bootstrap/Card";

const AerialPhotography = () => {
   const { t } = useTranslation();

    return (
       <div className="service-container">
          <ServiceInfo
             title={t("aerial_photography")}
             image={aerial}
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
                <div>
                   <div>
                      <h4>{t("aerial_photography_subtitle")}</h4>
                      <div>hola</div>
                   </div>
                </div>
             </Card.Body>
          </Card>
          <Contact />
       </div>
    );
};

export default AerialPhotography;
