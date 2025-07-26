import React from "react";
import { useTranslation } from "react-i18next";
import Contact from "../Home/Contact";
import ExpoMedia from "../ExpoMedia";
import { Helmet } from "react-helmet";
import { useTranslatedVideos } from "./WorkVideos";

const Works = () => {
   const { t } = useTranslation();
   const videos = useTranslatedVideos();

   return (
      <div className="works">
         <Helmet>
            <title>{t("works_meta")}</title>
            <meta
               name="description"
               content="Explora mis proyectos con drones: vídeos FPV, grabaciones aéreas para inmobiliarias, eventos y mucho más."
            />
         </Helmet>
         <div className="works-container">
            <h1>{t("works")}</h1>
            <h2>{t("works_desc")}</h2>
         </div>
         <div className="page-breadcrumb">
            <a href="/">{t("home")}</a>
            <span>/</span>
            <span>{t("works")}</span>
         </div>
         <div className="works-content">
            <ExpoMedia data={videos} />
         </div>
         <Contact />
      </div>
   );
};

export default Works;
