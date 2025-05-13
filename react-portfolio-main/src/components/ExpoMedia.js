import { useState, useEffect, useMemo, useRef } from "react";
import { useTransition, a } from "@react-spring/web";
import { useHistory } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css"; // Importar estilos de Skeleton
import { Spinner } from "react-bootstrap";

function ExpoMedia({ data }) {
   const [columns, setColumns] = useState(2);
   const [loadedVideos, setLoadedVideos] = useState({}); // Estado para controlar carga de videos

   const history = useHistory();

   const handleClick = (title) => {
      const slug = title.toLowerCase().replace(/\s+/g, "-");
      history.push(`/works/${slug}`);
   };

   useEffect(() => {
      const updateColumns = () => {
         if (window.matchMedia("(min-width: 1500px)").matches) {
            setColumns(3);
         } else if (window.matchMedia("(min-width: 1000px)").matches) {
            setColumns(2);
         } else if (window.matchMedia("(min-width: 600px)").matches) {
            setColumns(2);
         } else {
            setColumns(1);
         }
      };

      updateColumns();
      window.addEventListener("resize", updateColumns);
      return () => window.removeEventListener("resize", updateColumns);
   }, []);

   const ref = useRef();
   const [width, setWidth] = useState(0);

   useEffect(() => {
      const handleResize = () => {
         if (ref.current) {
            setWidth(ref.current.offsetWidth);
         }
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, [ref]);

   const [heights, gridItems] = useMemo(() => {
      let heights = new Array(columns).fill(0);
      let gridItems = data.map((child) => {
         const column = heights.indexOf(Math.min(...heights));
         const x = (width / columns) * column;
         const y =
            (heights[column] += (width / columns) * (11 / 16)) -
            (width / columns) * (11 / 16);
         return {
            ...child,
            x,
            y,
            width: width / columns,
            height: (width / columns) * (11 / 16),
         };
      });
      return [heights, gridItems];
   }, [columns, data, width]);

   const transitions = useTransition(gridItems, {
      keys: (item) => item.id,
      from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
      enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
      update: ({ x, y, width, height }) => ({ x, y, width, height }),
      leave: { height: 0, opacity: 0 },
      config: { mass: 5, tension: 500, friction: 100 },
      trail: 25,
   });

   const getEmbedUrl = (url) => {
      if (url.includes("youtube.com") || url.includes("youtu.be")) {
         return url.includes("embed") ? url : url.replace("watch?v=", "embed/");
      } else if (url.includes("instagram.com")) {
         return `https://www.instagram.com/p/${
            url.split("/p/")[1].split("/")[0]
         }/embed/`;
      }
      return url;
   };

   return (
      <div
         ref={ref}
         className="expoyt"
         style={{ height: Math.max(...heights) }}
      >
         {transitions((style, item) => (
            <a.div key={item.id} style={style}>
               <div
                  className="expoyt-project"
                  onClick={() => handleClick(item.slug)}
                  style={{
                     boxShadow: "0 0 17px 0 #000000bf",
                     width: "100%",
                     height: "100%",
                     cursor: "pointer",
                  }}
               >
                  {!loadedVideos[item.id] && (
                     <div
                        className="expoyt-project-loader"
                        style={{
                           position: "absolute",
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
                           }}
                        />
                     </div>
                  )}

                  <iframe
                     width="100%"
                     height="100%"
                     src={getEmbedUrl(item.videoUrl)}
                     title={item.title}
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                     onLoad={() =>
                        setLoadedVideos((prev) => ({
                           ...prev,
                           [item.id]: true,
                        }))
                     }
                     style={{
                        display: loadedVideos[item.id] ? "block" : "none",
                     }}
                  ></iframe>

                  <div className="expoyt-project-title">
                     <h3>{item.title}</h3>
                     <p>{item.drone}</p>
                  </div>
               </div>
            </a.div>
         ))}
      </div>
   );
}

export default ExpoMedia;
