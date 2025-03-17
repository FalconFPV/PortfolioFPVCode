import { useState } from "react";

function SponsorsWall({
   items = [],
   direction = "horizontal",
   pauseOnHover = false,
}) {
   const [isPaused, setIsPaused] = useState(false);

   const wrapperClass = [
      "sponsorsWall-wrapper",
      direction === "vertical" && "wrapper--vertical",
   ]
      .filter(Boolean)
      .join(" ");

   const sponsorClass = [
      "sponsor",
      direction === "vertical" && "sponsor--vertical",
      isPaused && "paused",
   ]
      .filter(Boolean)
      .join(" ");

   return (
      <article className={wrapperClass}>
         <div
            className={sponsorClass}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
         >
            <div className="sponsor__group">
               {items.map((item) => (
                  <div className="sponsor__item" key={item.name}>
                     <img src={item.image} alt={item.name} />
                  </div>
               ))}
            </div>
            <div className="sponsor__group" aria-hidden="true">
               {items.map((item) => (
                  <div className="sponsor__item" key={`dup1-${item.name}`}>
                     <img src={item.image} alt={item.name} />
                  </div>
               ))}
            </div>
         </div>
      </article>
   );
}

export default SponsorsWall;
