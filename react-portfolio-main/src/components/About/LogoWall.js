import { useState } from "react";
import GoogleReviewsWidget from "google-reviews-widget";

function LogoWall({
   items = [],
   direction = "horizontal",
   pauseOnHover = false,
}) {
   const [isPaused, setIsPaused] = useState(false);

   const wrapperClass = [
      "logoWall-wrapper",
      direction === "vertical" && "wrapper--vertical",
   ]
      .filter(Boolean)
      .join(" ");

   const marqueeClass = [
      "marquee",
      direction === "vertical" && "marquee--vertical",
      isPaused && "paused",
   ]
      .filter(Boolean)
      .join(" ");

   return (
      <article className={wrapperClass}>
         <div
            className={marqueeClass}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
         >
            <GoogleReviewsWidget instanceId="3G5KPuzQONPSSLksTNf5" />
         </div>
      </article>
   );
}

export default LogoWall;
