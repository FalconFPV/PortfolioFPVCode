import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
     <Typewriter
        options={{
           strings: [
              "Front End Developer",
              "SEO Analyst",
              "Drone Racing Pilot",
           ],
           autoStart: true,
           loop: true,
           deleteSpeed: 50,
        }}
     />
  );
}

export default TypeWriter;
