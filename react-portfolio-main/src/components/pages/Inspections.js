import React from "react";
import { useTranslation } from "react-i18next";
import inspectionImg from "../../Assets/ServiceImg/inspec.jpg"; // Imagen del servicio
import ServiceInfo from "./ServiceInfo";

const Inspections = () => {
   const { t } = useTranslation();

   return (
        <ServiceInfo
            title={t("inspections_surveys")}
            image={inspectionImg}
            subtitle={t("inspections_surveys_subtitle")}
            description={t("inspections_surveys_desc")}
            details={t("inspections_surveys_details")}
        />
   );
};

export default Inspections;
