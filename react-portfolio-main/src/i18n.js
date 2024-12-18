import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
   .use(HttpBackend) // Cargar archivos externos
   .use(initReactI18next) // Integración con React
   .init({
      fallbackLng: "es", // Idioma predeterminado
      lng: "es", // Idioma inicial
      backend: {
         loadPath: "/PortfolioFalcon/locales/{{lng}}/labels_{{lng}}.json", // Ruta a los archivos XML
      },
      interpolation: {
         escapeValue: false, // Permite HTML en las traducciones
      },
   });

export default i18n;
