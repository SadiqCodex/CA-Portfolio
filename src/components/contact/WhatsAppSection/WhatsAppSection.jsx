import React from "react";
import "./WhatsAppSection.scss";

const WhatsAppSection = () => {
    return (
        <section className="whatsapp-section">
            <div className="container">
                <div className="whatsapp-card">
                    <div className="qr-placeholder">
                        <span>📱</span>
                        <p>WhatsApp QR Code</p>
                    </div>
                    <div className="whatsapp-info">
                        <h3>Quick Connect</h3>
                        <p>Scan the QR code to start a WhatsApp conversation with us instantly.</p>
                        <button className="whatsapp-btn">💬 Chat on WhatsApp</button>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default WhatsAppSection;