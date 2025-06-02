import React from 'react';
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import { Helmet } from "react-helmet";

const Conditions = () => {
    const { t } = useTranslation();
    return (
       <div className="policy-conditions">
          <Helmet>
             <title>Términos y condiciones | Joan Company</title>
             <meta
                name="description"
                content="Consulta los términos y condiciones de los servicios de grabación y fotografía aérea con drones."
             />
          </Helmet>
          <div className="policy-conditions-container">
             <h2>{t("terms_and_conditions")}</h2>
             <p>{t("last_update")}</p>
          </div>
          <div className="page-breadcrumb">
             <a href="/">{t("home")}</a>
             <span>/</span>
             <span>{t("terms_and_conditions")}</span>
          </div>
          <Card
             className="quote-card-view"
             id="service-info-card"
             data-aos="fade-up"
             data-aos-duration="2000"
          >
             <Card.Body>
                <div className="policy-conditions-content">
                   <div
                      dangerouslySetInnerHTML={{
                         __html: t("conditions_content"),
                      }}
                   />
                </div>
             </Card.Body>
          </Card>
       </div>
    );
};

export default Conditions;