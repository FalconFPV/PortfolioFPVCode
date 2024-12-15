import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdfES from "../../Assets/Joan Company - CV ES.pdf";
import pdfEN from "../../Assets/Joan Company - CV EN.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeOld() {
   const [width, setWidth] = useState(window.innerWidth); // Iniciar con el ancho actual de la ventana
   const [currentPdf, setCurrentPdf] = useState(pdfES); // Estado para almacenar el PDF actual
   const [isPdfES, setIsPdfES] = useState(true); // Estado para saber si estamos en el PDF en español

   // Ajustar el ancho en tiempo real
   useEffect(() => {
      const handleResize = () => {
         setWidth(window.innerWidth); // Actualizar el ancho cada vez que la ventana cambie de tamaño
      };

      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize); // Limpiar el evento cuando el componente se desmonte
      };
   }, []);

   // Función para alternar entre PDF en español e inglés
   const togglePdf = () => {
      setIsPdfES(!isPdfES); // Alterna entre true y false
      setCurrentPdf(isPdfES ? pdfEN : pdfES); // Cambia el PDF que se está mostrando
   };

   // Ajustar el scale del PDF en función del ancho de la ventana
   const getScale = () => {
      if (width > 1200) {
         return 1.5;
      } else if (width > 768) {
         return 1;
      } else {
         return 0.5; // Para pantallas pequeñas como móviles
      }
   };

   return (
      <div>
         <Container fluid className="resume-section">
            <Row className="resume">
               <Document file={currentPdf}>
                  <Page pageNumber={1} scale={getScale()} />
               </Document>
            </Row>

            <Row style={{ justifyContent: "center", position: "relative" }}>
               {/* Botón para alternar entre PDF en Español y PDF en Inglés */}
               <Button
                  variant="secondary"
                  onClick={togglePdf}
                  className="download-button"
               >
                  {isPdfES ? "Ver CV en Inglés" : "Ver CV en Español"}
               </Button>

               {/* Botón para descargar el PDF que se está mostrando */}
               <Button
                  variant="primary"
                  href={currentPdf}
                  target="_blank"
                  className="download-button"
                  style={{ marginLeft: "10px" }}
               >
                  <AiOutlineDownload />
                  &nbsp;{isPdfES ? "Descarga mi CV" : "Download my CV"}
               </Button>
            </Row>
         </Container>
      </div>
   );
}

export default ResumeOld;
