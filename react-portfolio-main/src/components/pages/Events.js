import React from "react";
import { useTranslation } from "react-i18next";
import eventImg from "../../Assets/ServiceImg/wedding.jpg"; // Imagen del servicio
import ServiceInfo from "./ServiceInfo";

const Events = () => {
   const { t } = useTranslation();

   return (
      <ServiceInfo
         title={t("event_coverage")}
         image={eventImg}
         subtitle={t("event_coverage_subtitle")}
         description={t("event_coverage_desc")}
         details={t("event_coverage_details")}
      />
   );
};

export default Events;
