import React from "react";
import { useTranslation } from "react-i18next";

const Drones = () => {
   const { t } = useTranslation();
   return (
      <div className="policy-conditions">
         <div className="policy-conditions-container">
               <h2>{t("drones")}</h2>
               <p>{t("todos mis drones con los que trabajo")}</p>
         </div>
         <div className="page-breadcrumb">
            <a href="/PortfolioFalcon">{t("home")}</a>
            <span>/</span>
            <span>{t("drones")}</span>
         </div>
      </div>
   );
};

export default Drones;
