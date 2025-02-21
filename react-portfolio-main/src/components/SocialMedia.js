import React from "react";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function SocialMedia() {
   const { t } = useTranslation();
  return (
     <ul className="home-about-social-links">
        <li className="social-icons">
           <a
              href="mailto:joanfpv@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label={t("mailto")}
              className="icon-colour home-social-icons"
           >
              <MdEmail className="social-icon" />
           </a>
        </li>
        <li className="social-icons">
           <a
              href="https://www.youtube.com/@JoanCompany-FalconFPV"
              target="_blank"
              rel="noreferrer"
              aria-label={t("youtube")}
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
              aria-label={t("instagram")}
              className="icon-colour home-social-icons"
           >
              <FaInstagram className="social-icon" />
           </a>
        </li>
     </ul>
  );
}
export default SocialMedia;
