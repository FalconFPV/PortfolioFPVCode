import "../../BioLinks.css";
import BioCard from "./BioCard";
import bgImage from "../../Assets/bg.webp";
import { Helmet } from "react-helmet";

const Links = () => {
   return (
      <div className="bio-container">
         <Helmet>
            <title>Mis redes sociales y contacto | Joan Company</title>
            <meta
               name="description"
               content="Encuentra mis redes sociales y formas de contacto para seguir mi trabajo y proyectos."
            />
         </Helmet>
         <div
            className="bio-background"
            style={{ backgroundImage: `url(${bgImage})` }}
         ></div>
         <BioCard />
      </div>
   );
}

export default Links;
