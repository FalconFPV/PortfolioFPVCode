import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./components/Home/Home";
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
import Links from "./components/BioLinks/BioLinks";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n"; // i18next

function App() {
   const [load, updateLoad] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => updateLoad(false), 1100);
      Aos.init();
      return () => clearTimeout(timer);
   }, []);

   return (
      <Router basename="/">
         <div className="App" id={load ? "no-scroll" : "scroll"}>
            <Suspense fallback={<div>Loading...</div>}>
               <Switch>
                  {/* RUTA SIN NAVBAR NI FOOTER */}
                  <Route path="/links" exact component={Links} />

                  {/* TODAS LAS DEMÁS */}
                  <Route
                     path="/"
                     render={() => (
                        <>
                           <Navbar />
                           <ScrollToTop />
                           <Switch>
                              <Route path="/" exact component={Home} />
                              <Route
                                 path="/works/:videoName"
                                 component={WorkDetail}
                              />
                              <Route path="/works" exact component={Works} />
                              <Route path="/drones" component={Drones} />
                              <Route path="/policy" component={Policy} />
                              <Route
                                 path="/conditions"
                                 component={Conditions}
                              />
                              <Route
                                 path="/aerial-photography"
                                 component={AerialPhotography}
                              />
                              <Route
                                 path="/real-estate"
                                 component={RealEstate}
                              />
                              <Route path="/events" component={Events} />
                              <Route
                                 path="/inspections"
                                 component={Inspections}
                              />
                              <Route path="/fpv" component={FPV} />
                              <Route component={NotFound} />
                           </Switch>
                           <Footer />
                           <WhatsAppButton />
                           <ScrollToTopButton />
                        </>
                     )}
                  />
               </Switch>
            </Suspense>
            <Preloader load={load} />
         </div>
      </Router>
   );
}

export default App;
