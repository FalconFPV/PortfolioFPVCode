import { useState, useEffect } from "react";

function ReviewsWall({ direction = "horizontal", pauseOnHover = false }) {
   const [isPaused, setIsPaused] = useState(false);
   const [reviews, setReviews] = useState([]);

   useEffect(() => {
      fetch(
         "https://featurable.com/api/v1/widgets/9cd5ecb3-df13-4b98-9960-a286441750be"
      )
         .then((res) => res.json())
         .then((data) => {
            if (data.success && data.reviews) {
               const mapped = data.reviews.map((review) => ({
                  id: review.reviewId,
                  author: review.reviewer.displayName,
                  photo: review.reviewer.profilePhotoUrl,
                  rating: review.starRating,
                  text: review.comment,
                  time: new Date(review.createTime).toLocaleDateString("es-ES"),
               }));
               setReviews(mapped);
            }
         })
         .catch((err) => console.error("Error cargando reseñas:", err));
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

   const ReviewCard = ({ review, profileUrl }) => (
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
                     i < review.rating ? "text-[#F76008]" : "text-gray-600"
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
            <p
               className="see_more"
               onClick={() =>
                  window.open(
                     "https://www.google.es/maps/place/Joan+Company+%7C+Grabaci%C3%B3n+con+drones+FPV/@39.8416043,3.1350653,856m/data=!3m1!1e3!4m18!1m9!3m8!1s0x7870bbf1f88da63:0x88e1e595d1d8bfa8!2sJoan+Company+%7C+Grabaci%C3%B3n+con+drones+FPV!8m2!3d39.8416043!4d3.1376402!9m1!1b1!16s%2Fg%2F11xnmykrlr!3m7!1s0x7870bbf1f88da63:0x88e1e595d1d8bfa8!8m2!3d39.8416043!4d3.1376402!9m1!1b1!16s%2Fg%2F11xnmykrlr?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D",
                     "_blank"
                  )
               }
            >
               Ver más
            </p>
            <img
               src="https://reviews.beaver.codes/widget/google.png"
               alt="google"
               className="beaver-widget_source-logo"
            />
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
