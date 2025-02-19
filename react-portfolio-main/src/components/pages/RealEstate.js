import React from "react";
import { useTranslation } from "react-i18next";
import realEstateImg from "../../Assets/ServiceImg/realstate.jpg"; // Imagen del servicio
import ServiceInfo from "./ServiceInfo";

const RealEstate = () => {
   const { t } = useTranslation();

   return (
        <ServiceInfo
            title={t("real_estate_services")}
            image={realEstateImg}
            subtitle={t("real_estate_services_subtitle")}
            description={t("real_estate_services_desc")}
            details={t("real_estate_services_details")}
        />
   );
};

export default RealEstate;
