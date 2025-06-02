import React from 'react';
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import { Helmet } from "react-helmet";

const Policy = () => {
    const { t } = useTranslation();
    return (
       <div className="policy-conditions">
          <Helmet>
             <title>Política de privacidad | Joan Company</title>
             <meta
                name="description"
                content="Información sobre la política de privacidad y tratamiento de datos en Joan Company."
             />
          </Helmet>
          <div className="policy-conditions-container">
             <h2>{t("privacy_policy")}</h2>
             <p>{t("last_update")}</p>
          </div>
          <div className="page-breadcrumb">
             <a href="/">{t("home")}</a>
             <span>/</span>
             <span>{t("privacy_policy")}</span>
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
                      dangerouslySetInnerHTML={{ __html: t("privacy_content") }}
                   />
                </div>
             </Card.Body>
          </Card>
       </div>
    );
};

export default Policy;