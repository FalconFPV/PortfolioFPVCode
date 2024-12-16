import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
     <Typewriter
        options={{
           strings: [
              "Profesional Drone Racing Pilot",
              "Web Developer",
              "SEO Analyst",
           ],
           autoStart: true,
           loop: true,
           deleteSpeed: 50,
        }}
     />
  );
}

export default TypeWriter;
