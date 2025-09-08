import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Maria from "../../Assets/Testimonials/mariahibbs.png";
import Mmoll from "../../Assets/Testimonials/mmoll.png";
import CClavijo from "../../Assets/Testimonials/cclavijo.png";
import Mcaro from "../../Assets/Testimonials/mcaro.png";
import Milano from "../../Assets/Testimonials/milano.png";

function ReviewsWall({ direction = "horizontal", pauseOnHover = false }) {
   const [isPaused, setIsPaused] = useState(false);
   const [reviews, setReviews] = useState([]);
   const { t } = useTranslation();

   // 👉 Aquí defines tus reseñas "mock"
   const REVIEWS = [
      {
         id: "1",
         author: "Maria Hibbs",
         photo: Maria,
         rating: 5,
         text: "I've had the pleasure of working with Joan on a few occasions and am always super happy with his work. He captures incredible footage and delivers super quick. Plus, he's very friendly, professional and practically invisible. Highly recommend!",
         time: "10/08/2025",
      },
      {
         id: "2",
         author: "Miquel Moll",
         photo: Mmoll,
         rating: 5,
         text: "Fabuloso servicio!  Realizó varias grabaciones para mi hijo, deportista de Wingfoil y calidad precio inmejorable!! Trabajo profesional y serio.",
         time: "20/08/2025",
      },
      {
         id: "2",
         author: "Carlos Clavijo",
         photo: CClavijo,
         rating: 5,
         text: "Muy buen servicio. Solicité grabación aérea para un proyecto de bicis acuáticas y las imágenes perfectas, tal cual como las quería. Muchas gracias!",
         time: "23/08/2025",
      },
      {
         id: "2",
         author: "Milano Beach",
         photo: Milano,
         rating: 5,
         text: "Tuve la suerte de contar con Joan para realizar un vídeo promocional de mis dos restaurantes, Lunas Grill y Milano Beach, y no puedo estar más contento con el resultado. Es un auténtico profesional: puntual, creativo, con un manejo impecable del dron y una mirada estética que capta justo lo que uno quiere transmitir. Supo entender la esencia de cada espacio y plasmarla en imágenes espectaculares. Lo recomiendo al 100% a cualquier empresa o local que quiera llevar su imagen a otro nivel. ¡Gracias Joan!",
         time: "18/08/2025",
      },
      {
         id: "2",
         author: "Manu Caro",
         photo: Mcaro,
         rating: 5,
         text: "Recomendadisimo! Hace muy buen trabajo con los drones, hizo un vídeo promocional para mi negocio y quedo espectacular! Gracias joan!",
         time: "15/08/2025",
      },
   ];

   useEffect(() => {
      // En lugar de fetch → usamos la constante
      setReviews(REVIEWS);
   }, []);

   const truncateText = (text, maxLength) => {
      if (!text) return "";

      const translatedIndex = text.indexOf("(Translated by Google)");

      if (text.length > maxLength) {
         return text.substring(0, maxLength).trim() + "...";
      } else if (translatedIndex !== -1) {
         return text.substring(0, translatedIndex).trim() + "...";
      }

      return text;
   };

   const wrapperClass = [
      "reviewsWall-wrapper",
      direction === "vertical" && "wrapper--vertical",
   ]
      .filter(Boolean)
      .join(" ");

   const reviewClass = [
      "review",
      direction === "vertical" && "review--vertical",
      isPaused && "paused",
   ]
      .filter(Boolean)
      .join(" ");

   const ReviewCard = ({ review }) => (
      <div className="review__item p-3 rounded-xl shadow-md mx-2 w-72 flex-shrink-0 bg-[#0D0D0D] text-[#fafeff]">
         <div className="review__author flex items-center gap-2 mb-3">
            <img
               src={review.photo}
               alt={review.author}
               className="review__img w-10 h-10 rounded-full object-cover border-2 border-[#F76008]"
            />
            <div className="review__info">
               <p className="review__author-name font-semibold text-[#F76008]">
                  {review.author}
               </p>
               <p className="text-xs text-gray-400 mb-0">{review.time}</p>
            </div>
         </div>
         <div className="review__rating flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
               <span
                  key={i}
                  className={`text-sm ${
                     i < review.rating ? "rating_star" : "text-[#F76008]"
                  }`}
               >
                  ★
               </span>
            ))}
         </div>
         <div className="flex items-start gap-2">
            <p className="text-sm leading-snug text-[#fafeff]">
               {truncateText(review.text, 134)}
            </p>
            <div className="review__source">
               <a
                  className="see_more"
                  href="https://maps.app.goo.gl/8483Ytw47nQiyff4A"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  {t("see_more")}
               </a>
               <img
                  src="https://reviews.beaver.codes/widget/google.png"
                  alt="google"
                  className="beaver-widget_source-logo"
               />
            </div>
         </div>
      </div>
   );

   return (
      <article className={wrapperClass}>
         <div
            className={reviewClass}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
         >
            <div className="review__group flex">
               {reviews.map((review) => (
                  <ReviewCard review={review} key={review.id} />
               ))}
            </div>
            <div className="review__group flex" aria-hidden="true">
               {reviews.map((review) => (
                  <ReviewCard review={review} key={`dup1-${review.id}`} />
               ))}
            </div>
         </div>
      </article>
   );
}

export default ReviewsWall;
