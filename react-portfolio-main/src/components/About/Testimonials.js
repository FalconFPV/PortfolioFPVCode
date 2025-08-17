import { useTranslation } from "react-i18next";
import Reviews from "./Reviews";
import { useEffect } from "react";

const Testimonials = () => {
   const { t } = useTranslation();

  useEffect(() => {
     const script = document.createElement("script");
     script.src = "https://featurable.com/assets/bundle.js";
     script.defer = true;
     script.charset = "UTF-8";
     document.body.appendChild(script);

     return () => {
        // cleanup por si desmontas el componente
        document.body.removeChild(script);
     };
  }, []);

   return (
      <div
         className="testimonials-container"
         data-aos="fade-up"
         data-aos-duration="2000"
      >
         <h1>{t("testimonials")}</h1>
         <div className="testimonials">
            <Reviews />
         </div>
      </div>
   );
};

export default Testimonials;