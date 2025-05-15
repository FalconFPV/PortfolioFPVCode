import React from "react";
import { useTranslation } from "react-i18next";
import Contact from "../Home/Contact";
import ExpoMedia from "../ExpoMedia";

export const videos = [
   {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/sECxvJXhaI8?si=dtSnXqzrMRvd_Wbk",
      title: "Titulo del proyecto del video 1",
      desc: "Descripcion YT Video 1",
      slug: "yt-video-1",
      type: "yt",
      drone: "Drone FPV"
   },
   {
      id: 2,
      videoUrl: "https://www.instagram.com/p/CA4qFw2IFNb/",
      title: "Titulo Insta Video 2",
      desc: "Titulo del proyecto del video 2",
      slug: "insta-video-2",
      type: "insta",
      drone: "Drone Estabilizado"
   },
   {
      id: 3,
      videoUrl: "https://www.instagram.com/p/Ct81LB3gkOk/",
      title: "Titulo del proyecto del video 3",
      desc: "Descripcion Insta Video 3",
      slug: "insta-video-3",
      type: "insta",
      drone: "Drone Estabilizado"
   },
];

const Works = () => {
   const { t } = useTranslation();
   return (
      <div className="works">
         <div className="works-container">
            <h2>{t("works")}</h2>
            <p>{t("works_desc")}</p>
         </div>
         <div className="page-breadcrumb">
            <a href="/PortfolioFalcon">{t("home")}</a>
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
