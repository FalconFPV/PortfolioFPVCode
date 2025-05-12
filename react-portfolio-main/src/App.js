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
import AerialPhotography from "./components/pages/AerialPhotography";
import RealEstate from "./components/pages/RealEstate";
import Events from "./components/pages/Events";
import Inspections from "./components/pages/Inspections";
import FPV from "./components/pages/FPV";
import Policy from "./components/Policy";
import Conditions from "./components/Conditions";
import Works from "./components/pages/Works";
import WorkDetail from "./components/pages/WorkDetail";
import Drones from "./components/pages/Drones";
import NotFound from "./components/pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
   const [load, updateLoad] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         updateLoad(false);
      }, 1100);
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
                  <Route path="/works/:videoName" component={WorkDetail} />
                  <Route path="/works" exact component={Works} />
                  <Route path="/drones" component={Drones} />
                  <Route path="/policy" component={Policy} />
                  <Route path="/conditions" component={Conditions} />
                  <Route
                     path="/aerial-photography"
                     component={AerialPhotography}
                  />
                  <Route path="/real-estate" component={RealEstate} />
                  <Route path="/events" component={Events} />
                  <Route path="/inspections" component={Inspections} />
                  <Route path="/fpv" component={FPV} />
                  <Route component={NotFound} />
               </Switch>
               <Footer />
               <WhatsAppButton />
               <ScrollToTopButton />
            </Suspense>
         </div>
         <Preloader load={load} />
      </Router>
   );
}

export default App;
