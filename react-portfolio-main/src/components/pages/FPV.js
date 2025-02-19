import React from "react";
import { useTranslation } from "react-i18next";
import fpvImg from "../../Assets/ServiceImg/fpv.jpg"; // Imagen del servicio
import ServiceInfo from "./ServiceInfo";

const FPV = () => {
   const { t } = useTranslation();

   return (
        <ServiceInfo
            title={t("fpv")}
            image={fpvImg}
            subtitle={t("fpv_subtitle")}
            description={t("fpv_desc")}
            details={t("fpv_details")}
        />
   );
};

export default FPV;
