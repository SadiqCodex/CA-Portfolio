// src/pages/Home.jsx
import React from "react";
import Hero from "../../components/home/hero/Hero";
import Footer from "../../components/footer/Footer";
import "./Home.scss";
import Header from "../../components/header/header";

const Home = () => {
    return (
        <>
            \            <main className="home">
                {/* Hero Section */}
                <Hero />
            </main>
        </>
    );
};

export default Home;
