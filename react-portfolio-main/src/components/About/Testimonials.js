import LogoWall from "./LogoWall";
import t1 from "../../Assets/Testimonials/t1.webp";
import t2 from "../../Assets/Testimonials/t2.webp";
import t3 from "../../Assets/Testimonials/t3.webp";
import t4 from "../../Assets/Testimonials/userdefault.jpg";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
   const { t } = useTranslation();

   const testimonials = [
      {
         photo: t2,
         name: "Carlos Fernández",
         opinion: t("t1_opinion"),
      },
      {
         photo: t1,
         name: "Laura Sánchez",
         opinion: t("t2_opinion"),
      },
      {
         photo: t4,
         name: "Miguel Ramírez",
         opinion: t("t3_opinion"),
      },
      {
         photo: t3,
         name: "Beatriz López",
         opinion: t("t4_opinion"),
      },
      {
         photo: t4,
         name: "Daniel Ortega",
         opinion: t("t5_opinion"),
      },
   ];

   return (
      <div
         className="testimonials-container"
         data-aos="fade-up"
         data-aos-duration="2000"
      >
         <h1>{t("testimonials")}</h1>
         <div className="testimonials">
            <LogoWall
               items={testimonials}
               direction="horizontal"
               pauseOnHover={true}
               size="clamp(8rem, 1rem + 20vmin, 25rem)"
               duration="60s"
               bgColor="#060606"
               bgAccentColor="#111111"
            />
         </div>
      </div>
   );
};

export default Testimonials;