import React from "react";
import "./ContactInfo.scss";

const ContactInfo = () => {
    return (
        <section className="contact-info">
            <div className="container">
                <div className="contact-details">
                    <h2>Get In Touch</h2>

                    <div className="contact-item">
                        <span className="icon">📞</span>
                        <div>
                            <h4>Phone</h4>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="icon">✉️</span>
                        <div>
                            <h4>Email</h4>
                            <p>contact@yourcafirm.com</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="icon">📍</span>
                        <div>
                            <h4>Office Address</h4>
                            <p>2nd Floor, Business Tower<br />Jaipur, Rajasthan</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span className="icon">🕒</span>
                        <div>
                            <h4>Working Hours</h4>
                            <p>Mon – Sat<br />10 AM – 7 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
