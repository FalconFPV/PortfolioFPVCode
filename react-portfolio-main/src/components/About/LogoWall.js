import { useState } from "react";

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
      <article
         className={wrapperClass}
      >
         <div
            className={marqueeClass}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
         >
            <div className="marquee__group">
               {items.map((item, idx) => (
                  <div className="marquee__item">
                     <img key={idx} src={item.photo} alt={item.name} />
                     <div className="marquee__item-text">
                        <p>{item.name}</p>
                        <p>{item.opinion}</p>
                     </div>
                  </div>
               ))}
            </div>
            <div className="marquee__group" aria-hidden="true">
               {items.map((item, idx) => (
                  <div className="marquee__item">
                     <img
                        key={`dup1-${idx}`}
                        src={item.photo}
                        alt={item.name}
                     />
                     <div className="marquee__item-text">
                        <p>{item.name}</p>
                        <p>{item.opinion}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </article>
   );
}

export default LogoWall;
