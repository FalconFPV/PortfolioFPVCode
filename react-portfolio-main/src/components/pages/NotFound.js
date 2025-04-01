import React from "react";
import { FaRegFrown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const NotFound = () => {
   const { t } = useTranslation();
   return (
      <div className="not-found-container">
         <h1>
            404 <FaRegFrown />
         </h1>
         <h2>{t("notfound.subtitle")}</h2>
         <p>{t("notfound.message")}</p>
         <a href="/PortfolioFalcon" className="home-link">
            {t("notfound.text")}
         </a>
      </div>
   );
};

export default NotFound;
