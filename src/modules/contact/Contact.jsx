import React from "react";
import ContactHero from "../../components/contact/contactHero/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo/ContactInfo";
import ContactForms from "../../components/contact/ContactForms/ContactForm";
import MapSection from "../../components/contact/MapSection/MapSection";
import WhatsAppSection from "../../components/contact/WhatsAppSection/WhatsAppSection";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      <ContactHero />
      <ContactInfo />
      <ContactForms />
      <MapSection />
      <WhatsAppSection />
    </div>
  );
};


export default Contact;