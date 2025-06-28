import { useTranslation } from "react-i18next";

export const useTranslatedVideos = () => {
   const { t } = useTranslation();

   return [
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
         id: 3,
         videoUrl: "https://www.instagram.com/p/DLUMz-joyHs/",
         title: t("works_info.w1.title"),
         desc: t("works_info.w1.desc"),
         slug: "insta-video-2",
         type: "insta",
         drone: "Drone FPV",
      },
      {
         id: 4,
         videoUrl: "https://www.instagram.com/p/DLWxRRzNhEc/",
         title: t("works_info.w2.title"),
         desc: t("works_info.w2.desc"),
         slug: "insta-video-4",
         type: "insta",
         drone: "Drone FPV",
      },
   ];
};



