import React from "react";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function SocialMedia() {
  return (
     <ul className="home-about-social-links">
        <li className="social-icons">
           <a
              href="mailto:joanfpv@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
           >
              <MdEmail className="social-icon" />
           </a>
        </li>
        <li className="social-icons">
           <a
              href="https://www.youtube.com/@falconfpv9584"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
           >
              <FaYoutube className="social-icon" />
           </a>
        </li>
        <li className="social-icons">
           <a
              href="https://www.instagram.com/falcon_fpv/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
           >
              <FaInstagram className="social-icon" />
           </a>
        </li>
     </ul>
  );
}
export default SocialMedia;
