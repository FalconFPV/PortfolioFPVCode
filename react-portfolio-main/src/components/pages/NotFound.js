import React from "react";
import { FaRegFrown } from "react-icons/fa";

const NotFound = () => {
   return (
      <div className="not-found-container">
         <h1>404 <FaRegFrown/></h1>
         <h2>¡Página no encontrada!</h2>
         <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
         <a href="/PortfolioFalcon" className="home-link">
            Volver al inicio
         </a>
      </div>
   );
};

export default NotFound;
