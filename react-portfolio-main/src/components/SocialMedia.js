import React from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function SocialMedia() {
   const { t } = useTranslation();
  return (
     <ul className="home-about-social-links">
        <li className="social-icons">
           <a
              href="mailto:falcon@joancompany.es"
              target="_blank"
              rel="noreferrer"
              aria-label={t("mailto")}
              className="icon-colour home-social-icons"
              title={t("mailto")}
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
              title="Instagram"
           >
              <FaInstagram className="social-icon" />
           </a>
        </li>
        <li className="social-icons">
           <a
              href="https://www.facebook.com/profile.php?id=100023819556799"
              target="_blank"
              rel="noreferrer"
              aria-label={t("facebook")}
              className="icon-colour home-social-icons"
              title="Facebook"
           >
              <FaFacebook className="social-icon" />
           </a>
        </li>
     </ul>
  );
}
export default SocialMedia;
