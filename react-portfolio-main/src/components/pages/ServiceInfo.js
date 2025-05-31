import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Spinner } from "react-bootstrap";

const ServiceInfo = ({ title, subtitle, image, description }) => {
   const { t } = useTranslation();
   const [imageLoaded, setImageLoaded] = useState(false);
   
   useEffect(() => {
       const img = new Image();
       img.src = image;
       img.onload = () => setImageLoaded(true);
    }, [image]);
   
   return (
      <div className="service-info">
         <div
            style={{ backgroundImage: `url(${image})` }}
            className="service-info-container"
         >
            {!imageLoaded && (
               <div
                  className="img-loader"
               >
                  <Spinner
                     animation="border"
                     style={{
                        color: "var(--imp-text-color)",
                     }}
                  />
               </div>
            )}
            <h2 className="service-info-title">{title}</h2>
            <h3 className="service-info-subtitle">{subtitle}</h3>
         </div>
         <div className="page-breadcrumb">
            <a href="/">{t("home")}</a>
            <span>/</span>
            <span>{title}</span>
         </div>
      </div>
   );
};

ServiceInfo.propTypes = {
   title: PropTypes.string.isRequired,
   subtitle: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
};

export default ServiceInfo;
