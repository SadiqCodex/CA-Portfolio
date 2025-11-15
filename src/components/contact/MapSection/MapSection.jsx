import React from "react";
import "./MapSection.scss";

const MapSection = () => {
    return (
        <section className="map-section">
            <div className="container">
                <h2>Find Us</h2>
                <div className="map-placeholder">
                    <div className="map-content">
                        <span>🗺️</span>
                        <p>Google Map Integration</p>
                        <small>2nd Floor, Business Tower, Jaipur, Rajasthan</small>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default MapSection;