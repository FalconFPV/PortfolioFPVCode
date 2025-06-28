import { useParams } from "react-router-dom";
import React from "react";
import { useState} from "react";
import { useTranslation } from "react-i18next";
import Contact from "../Home/Contact";
import { Spinner } from "react-bootstrap";
import { useTranslatedVideos } from "./WorkVideos";

function getEmbedUrl(url) {
   if (url.includes("youtube.com") || url.includes("youtu.be")) {
      return url.includes("embed") ? url : url.replace("watch?v=", "embed/");
   } else if (url.includes("instagram.com")) {
      return `https://www.instagram.com/p/${
         url.split("/p/")[1].split("/")[0]
      }/embed/`;
   }
   return url;
}

const WorkDetail = () => {
   const [loadedVideos, setLoadedVideos] = useState({}); // Estado para controlar carga de videos
   const { t } = useTranslation();
   const videos = useTranslatedVideos();
   const { videoName } = useParams();
   const video = videos.find((v) => v.slug === videoName);

   if (!video) {
      return <p>Video no encontrado.</p>;
   }

   return (
      <div className="works">
         <div className="works-container">
            <h2>{video.title}</h2>
            <p>{video.desc}</p>
         </div>
         <div className="page-breadcrumb">
            <a href="/">{t("home")}</a>
            <span id="sp">/</span>
            <a href="/works">{t("works")}</a>
            <span>/</span>
            <span className="breadcrumb-title">{video.title}</span>
         </div>
         <div className="works-content">
            <div
               className={`work-video-container ${
                  video.type === "yt" ? "video-yt" : "video-insta"
               }`}
            >
               <div className="work-video-loader">
                  {!loadedVideos[video.id] && (
                     <div
                        className="expoyt-project-loader"
                        style={{
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "center",
                           width: "100%",
                           height: "100%",
                        }}
                     >
                        <Spinner
                           animation="border"
                           style={{
                              color: "var(--imp-text-color)",
                              width: "3rem",
                              height: "3rem",
                           }}
                        />
                     </div>
                  )}
                  <iframe
                     width="100%"
                     height="100%"
                     src={getEmbedUrl(video.videoUrl)}
                     title={video.title}
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                     onLoad={() =>
                        setLoadedVideos((prev) => ({
                           ...prev,
                           [video.id]: true,
                        }))
                     }
                     style={{
                        display: loadedVideos[video.id] ? "block" : "none",
                     }}
                  />
               </div>
            </div>
         </div>
         <Contact />
      </div>
   );
};

export default WorkDetail;
