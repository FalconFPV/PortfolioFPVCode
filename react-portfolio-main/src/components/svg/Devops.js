import * as React from "react";
const SvgDevops = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="url(#devops_svg__a)"
      d="M15 3.622v8.512L11.5 15l-5.425-1.975v1.958L3.004 10.97l8.951.7V4.005zm-2.984.428L6.994 1v2.001L2.382 4.356 1 6.13v4.029l1.978.873V5.869l9.038-1.818z"
    />
    <defs>
      <linearGradient
        id="devops_svg__a"
        x1={8}
        x2={8}
        y1={14.956}
        y2={1.026}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0078D4" />
        <stop offset={0.16} stopColor="#1380DA" />
        <stop offset={0.53} stopColor="#3C91E5" />
        <stop offset={0.82} stopColor="#559CEC" />
        <stop offset={1} stopColor="#5EA0EF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgDevops;
