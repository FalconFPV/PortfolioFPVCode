import "../../BioLinks.css";
import BioCard from "./BioCard";
import bgImage from "../../Assets/bg.webp";

const Links = () => {
   return (
      <div className="bio-container">
         <div
            className="bio-background"
            style={{ backgroundImage: `url(${bgImage})` }}
         ></div>
         <BioCard />
      </div>
   );
}

export default Links;
