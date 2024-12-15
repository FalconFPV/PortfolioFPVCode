import ECONOMIAPP from "./Assets/Projects/EconomyApp.webp";
import AEROGUARDIAS from "./Assets/Projects/Aeroguardias.webp";
import SWIFT_LOGO from "./Assets/swift.png";
import LARAVEL_LOGO from "./Assets/laravel.png";
import REACT_LOGO from "./Assets/react.png";
import EC1 from "./Assets/Projects/Ec1.png";
import EC2 from "./Assets/Projects/Ec2.png";
import EC3 from "./Assets/Projects/Ec3.png";
import EC4 from "./Assets/Projects/Ec4.png";
import EC5 from "./Assets/Projects/Ec5.png";
import EC6 from "./Assets/Projects/Ec6.png";
import EC7 from "./Assets/Projects/Ec7.png";
import AG1 from "./Assets/Projects/Ag1.png";
import Html5 from "./components/svg/Html5";
import Css from "./components/svg/Css";
import Sass from "./components/svg/Sass";
import Jquery from "./components/svg/Jquery";
import Php from "./components/svg/Php";
import Sql from "./components/svg/Sql";
import Vb from "./components/svg/Vb";
import C from "./components/svg/C";
import Java from "./components/svg/Java";
import Js from "./components/svg/Js";
import ReactJS from "./components/svg/React";
import Laravel from "./components/svg/Laravel";
import Git from "./components/svg/Git";
import Devops from "./components/svg/Devops";

// Lenguajes y frameworks
export const skills = [
   { name: "HTML5", percentage: 100, experience: 4, Component: Html5 },
   { name: "CSS3", percentage: 93, experience: 4, Component: Css },
   { name: "SASS", percentage: 90, experience: 1, Component: Sass },
   { name: "jQuery", percentage: 90, experience: 2, Component: Jquery },
   { name: "PHP", percentage: 89, experience: 2, Component: Php },
   { name: "SQL", percentage: 85, experience: 4, Component: Sql },
   { name: "VB", percentage: 70, experience: 1, Component: Vb },
   { name: "C#", percentage: 70, experience: 2, Component: C },
   { name: "Java", percentage: 75, experience: 4, Component: Java },
   { name: "JavaScript", percentage: 90, experience: 4, Component: Js },
   { name: "React", percentage: 90, experience: 3, Component: ReactJS },
   { name: "Laravel", percentage: 90, experience: 3, Component: Laravel },
   { name: "GIT", percentage: 100, experience: 4, Component: Git },
   { name: "Devops", percentage: 95, experience: 2, Component: Devops },
];

export const PROJECTS = [
   {
      image: ECONOMIAPP,
      name: "EconomiApp",
      images: [SWIFT_LOGO],
      carrousel: [EC7, EC6],
      description: "Expenses, budgets and financial goals manager for IOS & WatchOS.",
   },
   {
      image: AEROGUARDIAS,
      name: "AeroGuardias",
      images: [LARAVEL_LOGO, REACT_LOGO],
      carrousel: [AG1],
      description: "Airport firefighters schedules manager.",
   },
];