import React, { useState } from "react";
import { FaRegCheckCircle, FaRegQuestionCircle, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {

   const [recaptchaToken, setRecaptchaToken] = useState(null);
   const recaptchaRef = React.useRef();
   const { t } = useTranslation();
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
   });

   const [errors, setErrors] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitMessage, setSubmitMessage] = useState("");

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const validateForm = () => {
      const newErrors = {};
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9+\- ]+$/;

      if (!formData.name.trim()) newErrors.name = t("name_required");
      if (!formData.email.trim()) {
         newErrors.email = t("email_required");
      } else if (!emailRegex.test(formData.email)) {
         newErrors.email = t("email_invalid");
      }
      if (formData.phone && !phoneRegex.test(formData.phone)) {
         newErrors.phone = t("phone_invalid");
      }
      if (!formData.message.trim())
         newErrors.message = t("message_required");

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!recaptchaToken) {
         setSubmitMessage(t("captcha_required")); // Añade esta traducción
         return;
      }

      if (validateForm()) {
         setIsSubmitting(true);

         try {
            const response = await fetch(
               "https://formmail.vercel.app/api/send-email",
               {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ ...formData, recaptchaToken }), 
               }
            );

            const data = await response.json();
            if (data.success) {
               setSubmitMessage(t("succ_message"));
               setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
               setSubmitMessage(t("error_message"));
            }
         } catch (error) {
            setSubmitMessage(t("server_error"));
         } finally {
            setIsSubmitting(false);
         }
      }
   };

   const closeMessage = () => {
      setSubmitMessage("");
   };

   return (
      <div className="contact-form-container">
         <form onSubmit={handleSubmit} className="contact-form">
            <h2>{t("tell_us")}</h2>
            <div className="form-group">
               <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("name_placeholder")}
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "error-input" : ""}
               />
               {errors.name && (
                  <span className="error-message">{errors.name}</span>
               )}
            </div>

            <div className="form-group">
               <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("email_placeholder")}
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error-input" : ""}
               />
               {errors.email && (
                  <span className="error-message">{errors.email}</span>
               )}
            </div>

            <div className="form-group">
               <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder={t("phone_placeholder")}
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "error-input" : ""}
               />
               {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
               )}
            </div>

            <div className="form-group">
               <textarea
                  id="message"
                  name="message"
                  placeholder={t("mess_placeholder")}
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={errors.message ? "error-input" : ""}
               />
               {errors.message && (
                  <span className="error-message">{errors.message}</span>
               )}
            </div>
            <ReCAPTCHA
               sitekey="6LdDz3ErAAAAAAhHJsiE_QSd7FdcD0GEjhktCZkL"
               onChange={(token) => setRecaptchaToken(token)}
               ref={recaptchaRef}
            />
            <button
               type="submit"
               className="submit-button"
               disabled={isSubmitting}
            >
               {isSubmitting ? t("sending") : t("send")}
            </button>
         </form>

         {submitMessage && (
            <div className="submit-message-overlay">
               <div
                  className={`submit-message ${
                     submitMessage.includes("éxito") ||
                     submitMessage.includes("successfully")
                        ? "success"
                        : "error"
                  }`}
               >
                  <div className="message-icon">
                     {submitMessage.includes("éxito") ||
                     submitMessage.includes("successfully") ? (
                        <FaRegCheckCircle />
                     ) : (
                        <FaRegQuestionCircle />
                     )}
                  </div>
                  <p>{submitMessage}</p>
                  <button
                     className={`close-button  ${
                        submitMessage.includes("éxito") ||
                        submitMessage.includes("successfully")
                           ? "success"
                           : "error"
                     }`}
                     onClick={closeMessage}
                  >
                     <FaTimes />
                     <p>{t("close")}</p>
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};

export default ContactForm;
