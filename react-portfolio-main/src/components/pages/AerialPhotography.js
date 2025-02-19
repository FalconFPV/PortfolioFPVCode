import React from "react";
import { useTranslation } from "react-i18next";
import aerial from "../../Assets/ServiceImg/aerial.jpeg"; // Imagen específica del servicio
import Contact from "../Home/Contact";
import ServiceInfo from "./ServiceInfo";

const AerialPhotography = () => {
   const { t } = useTranslation();

   return (
       <ServiceInfo
           title={t("aerial_photography")}
           image={aerial}
           subtitle={t("aerial_photography_subtitle")}
           description={t("aerial_photography_desc")}
       />
       
   );
};

export default AerialPhotography;
