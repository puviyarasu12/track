import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Header with Logo and Login Button */}
      <header className="top-bar">
        <div className="logo">Trackzone</div>
        <div className="nav-buttons">
          <button className="btn-login" onClick={() => navigate("/login")}>Login</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Smart Geo-Location Attendance System</h1>
          <p>Track employee attendance automatically with precision and efficiency.</p>
          <button className="btn-primary" onClick={() => navigate("/login")}>
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <FeatureCard
            icon="📍"
            title="Geo-Fencing Attendance"
            description="Automatically mark attendance when employees enter the virtual boundary."
          />
          <FeatureCard
            icon="⏳"
            title="Real-Time Monitoring"
            description="Get live attendance updates and insights on employee movements."
          />
          <FeatureCard
            icon="💳"
            title="Payroll Integration"
            description="Link attendance data directly to salary calculations with ease."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <FeatureCard 
            icon="✅" 
            title="Quick Check-in" 
            description="Simple geo-location based attendance" 
          />
          <FeatureCard 
            icon="📊" 
            title="Real-time Updates" 
            description="Instant attendance tracking" 
          />
          <FeatureCard 
            icon="💼" 
            title="Easy Review" 
            description="Simplified attendance management" 
          />
        </div>
      </section>
      <Footer/>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}