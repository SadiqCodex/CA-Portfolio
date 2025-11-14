import React from "react";
import Hero from "../../components/home/hero/Hero";
import About from "../../components/home/about/About";
import Mission from "../../components/home/mission/Mission";
import Services from "../../components/home/services/Services";
import Network from "../../components/home/network/Network";
import Industries from "../../components/home/industries/Industries";
import Testimonials from "../../components/home/testimonials/Testimonials";
import CTA from "../../components/home/cta/CTA";
import "./Home.scss";

const Home = () => {
    return (
        <main className="home">
            <Hero />
            <About />
            <Mission />
            <Services />
            <Network />
            <Industries />
            <Testimonials />
            <CTA />
        </main>
    );
};

export default Home;
