import React from "react";
import { useTranslation } from "react-i18next";
import fpvImg from "../../Assets/ServiceImg/fpv.jpg"; // Imagen del servicio
import Contact from "../Home/Contact";
import ServiceInfo from "./ServiceInfo";
import Card from "react-bootstrap/Card";

const FPV = () => {
   const { t } = useTranslation();

    return (
       <div className="service-container">
          <ServiceInfo
             title={t("fpv")}
             image={fpvImg}
             subtitle={t("fpv_subtitle")}
             description={t("fpv_desc")}
             details={t("fpv_details")}
          />
          <Card
             className="quote-card-view"
             id="service-info-card"
             data-aos="fade-up"
             data-aos-duration="2000"
          >
             <Card.Body>
                <div className="service-info-content-container">
                   <div className="service-info-content">
                      <h3>{t("aerial_photography_subtitle")}</h3>
                      <p>
                         La fotografía con drones ha revolucionado la forma de
                         capturar imágenes desde el aire, ofreciendo una
                         alternativa más accesible y versátil en comparación con
                         los métodos tradicionales. Gracias a su capacidad para
                         sobrevolar grandes superficies en pocos segundos, los
                         drones permiten obtener tomas aéreas de alta calidad a
                         un coste reducido y con una gran flexibilidad en
                         distintos entornos.
                      </p>
                      <p>
                         Los drones equipados con cámaras de última generación
                         garantizan imágenes nítidas y detalladas, ideales para
                         una amplia variedad de aplicaciones. Desde proyectos
                         publicitarios hasta inspecciones técnicas, su capacidad
                         para adaptarse a diferentes necesidades los convierte
                         en una herramienta imprescindible en el sector
                         audiovisual.
                      </p>
                      <p>
                         Como profesional certificado, ofrezco un servicio
                         profesional de fotografía con drones para publicidad,
                         eventos, inspecciones visuales, reportajes fotográficos
                         y cualquier otro proyecto que requiera imágenes aéreas
                         impactantes.
                      </p>
                      <p>
                         Si necesitas capturar tomas aéreas con drones, cuéntame
                         tu idea y me encargaré de todo: selección del equipo
                         adecuado, planificación de vuelo, gestión de permisos,
                         transporte, captura de imágenes y postproducción. Me
                         aseguraré de que obtengas resultados espectaculares con
                         la máxima eficiencia y calidad.
                      </p>
                   </div>
                   <div className="service-info-image">
                      <img src={fpvImg} alt={t("aerial_photography")} />
                   </div>
                </div>
             </Card.Body>
          </Card>
          <div
             className="service-questions"
             style={{ backgroundImage: `url(${fpvImg})` }}
          >
             <div className="service-questions-container">
                <h3>Preguntas frecuentes sobre fotografía aérea con drones</h3>
                <h4>
                   ¿Qué tipo de dron se utiliza para la fotografía profesional?
                </h4>
                <p>
                   Los drones empleados en fotografía aérea están equipados con
                   cámaras compactas de alta resolución, esenciales para obtener
                   imágenes nítidas y detalladas. Aunque hay distintos modelos
                   disponibles, la calidad de la fotografía depende
                   principalmente de la cámara que incorporen. Para capturar
                   tomas profesionales desde el aire, utilizo drones como el DJI
                   Phantom 4, DJI Inspire y DJI Mavic Pro.
                </p>
                <h4>
                   ¿Cuál es el precio de un servicio de fotografía aérea con
                   dron?
                </h4>
                <p>
                   La fotografía con dron permite capturar imágenes desde
                   ángulos únicos y de grandes superficies, algo que antes solo
                   era posible con aviones o helicópteros. Gracias a los drones,
                   los costes se han reducido considerablemente al prescindir de
                   pilotos especializados y el alto consumo de combustible.
                </p>
                <p>
                   El precio del servicio varía en función de las necesidades
                   del proyecto, teniendo en cuenta factores como el tipo de
                   equipo utilizado, el número de vuelos, la localización y el
                   trabajo de producción y postproducción. Generalmente, el
                   coste mínimo de una sesión fotográfica con dron parte de unos
                   150€. Para obtener un presupuesto personalizado, no dudes en
                   contactarme.
                </p>
             </div>
          </div>
          <Contact />
       </div>
    );
};

export default FPV;
