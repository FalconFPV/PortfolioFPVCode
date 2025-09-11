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
         id: 5,
         videoUrl: "https://www.instagram.com/p/DMXL8Uuo2hx/",
         title: t("works_info.w5.title"),
         desc: t("works_info.w5.desc"),
         slug: "windsurf",
         type: "insta",
         drone: "Drone FPV",
      },
      {
         id: 3,
         videoUrl: "https://www.instagram.com/p/DMFYr_sJuw4/",
         title: t("works_info.w3.title"),
         desc: t("works_info.w3.desc"),
         slug: "lunas",
         type: "insta",
         drone: "Drone FPV",
      },
      {
         id: 6,
         videoUrl: "https://www.instagram.com/p/DOaugiQiL1d/",
         title: t("works_info.w6.title"),
         desc: t("works_info.w6.desc"),
         slug: "milano-beach",
         type: "insta",
         drone: "Drone FPV",
      },
      {
         id: 1,
         videoUrl: "https://www.instagram.com/p/DLUMz-joyHs/",
         title: t("works_info.w1.title"),
         desc: t("works_info.w1.desc"),
         slug: "circuito-llucmajor",
         type: "insta",
         drone: "Drone FPV",
      },
      {
         id: 2,
         videoUrl: "https://www.instagram.com/p/DLWxRRzNhEc/",
         title: t("works_info.w2.title"),
         desc: t("works_info.w2.desc"),
         slug: "mt-fitness",
         type: "insta",
         drone: "Drone FPV",
      },
      {
         id: 4,
         videoUrl: "https://www.instagram.com/p/DLmXhGDsiWa/",
         title: t("works_info.w4.title"),
         desc: t("works_info.w4.desc"),
         slug: "karting-llucmajor",
         type: "insta",
         drone: "Drone FPV",
      },
   ];
};



