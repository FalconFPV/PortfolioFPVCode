import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";
import Aos from "aos";
import "aos/dist/aos.css";
import "./i18n"; // Importa la configuración de i18next
import { Suspense } from "react";

function App() {
   const [load, updateLoad] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         updateLoad(false);
      }, 1300);
      Aos.init();
      return () => clearTimeout(timer);
   }, []);

   return (
      <Router basename="/PortfolioFalcon">
         <div className="App" id={load ? "no-scroll" : "scroll"}>
            <Suspense fallback={<div>Loading...</div>}>
               <Navbar />
            <ScrollToTop />
            <Switch>
               <Route path="/" exact component={Home} />
            </Switch>
            <Footer />
            <ScrollToTopButton />
            </Suspense>
         </div>
         <Preloader load={load} />
      </Router>
   );
}

export default App;
