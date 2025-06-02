import React from "react";
import { useTranslation } from "react-i18next";
import Contact from "../Home/Contact";
import ExpoMedia from "../ExpoMedia";
import { Helmet } from "react-helmet";

export const videos = [
   // {
   //    id: 1,
   //    videoUrl: "https://www.youtube.com/embed/sECxvJXhaI8?si=dtSnXqzrMRvd_Wbk",
   //    title: "Titulo del proyecto del video 1",
   //    desc: "Descripcion YT Video 1",
   //    slug: "yt-video-1",
   //    type: "yt",
   //    drone: "Drone FPV",
   // },
   {
      id: 2,
      videoUrl: "https://www.instagram.com/p/CA4qFw2IFNb/",
      title: '"El Campet" - FPV Cinematic',
      desc: "Toma cinematica en el club de vuelo El Campet, Pollensa",
      slug: "insta-video-2",
      type: "insta",
      drone: "Drone FPV",
   },
   // {
   //    id: 3,
   //    videoUrl: "https://www.instagram.com/p/DJJswWPt8QV/",
   //    title: "Fira Náutica 2025 - FOSH (Vister)",
   //    desc: "Proyecto Realizado por Vister para FOSH Catering",
   //    slug: "insta-video-3",
   //    type: "insta",
   //    drone: "Drone Estabilizado",
   // },
];

const Works = () => {
   const { t } = useTranslation();
   return (
      <div className="works">
         <Helmet>
            <title>Trabajos realizados con drones | Joan Company</title>
            <meta
               name="description"
               content="Explora mis proyectos con drones: vídeos FPV, grabaciones aéreas para inmobiliarias, eventos y mucho más."
            />
         </Helmet>
         <div className="works-container">
            <h2>{t("works")}</h2>
            <p>{t("works_desc")}</p>
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
