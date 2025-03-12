import React from "react";
import { useTranslation } from "react-i18next";
import Contact from "../Home/Contact";
// import Expo from "../Expo"
import ExpoMedia from "../ExpoMedia";

// const data = [
//    {
//       id: 1,
//       image: "https://picsum.photos/id/10/200/300",
//       height: 600,
//       title: "Nombre Aleatorio Proyecto 1",
//    },
//    {
//       id: 2,
//       image: "https://picsum.photos/id/14/200/300",
//       height: 600,
//       title: "Nombre Aleatorio Proyecto 2",
//    },
//    {
//       id: 3,
//       image: "https://picsum.photos/id/15/200/300",
//       height: 600,
//       title: "Nombre Aleatorio Proyecto 3",
//    },
//    {
//       id: 4,
//       image: "https://picsum.photos/id/16/200/300",
//       height: 600,
//       title: "Nombre Aleatorio Proyecto 4",
//    },
//    {
//       id: 5,
//       image: "https://picsum.photos/id/17/200/300",
//       height: 600,
//       title: "Nombre Aleatorio Proyecto 5",
//    },
//    {
//       id: 6,
//       image: "https://picsum.photos/id/19/200/300",
//       height: 600,
//       title: "Nombre Aleatorio Proyecto 6",
//    },
//    {
//       id: 7,
//       image: "https://picsum.photos/id/37/200/300",
//       height: 600,
//       title: "Nombre Aleatorio Proyecto 7",
//    },
//    {
//       id: 8,
//       image: "https://picsum.photos/id/39/200/300",
//       height: 600,
//       title: "Nombre Aleatorio Proyecto 8",
//    },
//    {
//       id: 9,
//       image: "https://picsum.photos/id/85/200/300",
//       height: 600,
//       title: "Nombre Aleatorio Proyecto 9",
//    },
//    {
//       id: 10,
//       image: "https://picsum.photos/id/103/200/300",
//       height: 600,
//       title: "Nombre Aleatorio Proyecto 10",
//    },
// ];

const videos = [
   {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/sECxvJXhaI8?si=dtSnXqzrMRvd_Wbk",
      title: "Título Video 1",
   },
   {
      id: 2,
      videoUrl: "https://www.youtube.com/embed/8dcYhB9F36Y?si=t1xdHYsVRemp-aJx",
      title: "Título Video 2",
   },
   {
      id: 3,
      videoUrl: "https://www.instagram.com/p/CJIq146qT8V",
      title: "Título Video 3",
   },
   {
      id: 4,
      videoUrl: "https://www.youtube.com/embed/-75WXixy2yY?si=EXwBGb5nX16bIZM3",
      title: "Título Video 4",
   },
   // Más elementos...
];

const Works = () => {
   const { t } = useTranslation();
   return (
      <div className="works">
         <div className="works-container">
            <h2>{t("works")}</h2>
            <p>{t("last_update")}</p>
         </div>
         <div className="page-breadcrumb">
            <a href="/PortfolioFalcon">{t("home")}</a>
            <span>/</span>
            <span>{t("works")}</span>
         </div>
         <div className="works-content">
            {/* <Expo data={data} /> */}
            <ExpoMedia data={videos} />
         </div>
         <Contact />
      </div>
   );
};

export default Works;
