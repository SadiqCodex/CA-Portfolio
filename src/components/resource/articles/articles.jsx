import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "./articles.scss";

export default function ArticlesSection() {
  const articles = [
  {
    title: "Latest GST Amendments You Must Know in 2025",
    desc: "A complete breakdown of important GST changes and their impact on businesses.",
    category: "GST",
    date: "Nov 2025",
    img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&q=80",
  },
  {
    title: "Income Tax Planning Strategies for Individuals",
    desc: "Smart tax-saving techniques for FY 2025-26 for salaried and business individuals.",
    category: "Income Tax",
    date: "Oct 2025",
    img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&q=80",
  },
  {
    title: "MCA Compliance Checklist for Private Limited Companies",
    desc: "A simple guide covering annual compliance and ROC filings.",
    category: "MCA/ROC",
    date: "Sep 2025",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&q=80",

  },
];


  return (
    <section className="articles-section" id="articles">
      <h2 className="section-title">Articles <span> & Insights </span></h2>
      <p className="section-subtitle">
        Stay updated with expert analysis, tax updates, compliance news, and
        financial guidance.
      </p>

      <div className="articles-grid">
        {articles.map((item, index) => (
          <div className="article-card" key={index}>
            <div className="image-wrap">
              <img src={item.img} alt={item.title} />
              <span className="date-badge">{item.date}</span>
            </div>

            <div className="content">
              <span className="category">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <button className="read-more">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
