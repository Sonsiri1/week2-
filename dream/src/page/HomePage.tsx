import React from "react";
import "./homepage.css";

const Home: React.FC = () => {
  return (
    <div className="home-wrapper">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="gradient-text">Mywebsite</span>
          </h1>
          <p className="hero-subtitle">
            Discover amazing people and connect with our community
          </p>
          <div className="hero-buttons">
            <a href="#userlist" className="btn btn-primary">
              View Users
            </a>
            <a href="#about" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="floating-card card-1">
            <div className="mini-avatar">A</div>
            <div className="mini-info">
              <div className="mini-name">Alice Johnson</div>
              <div className="mini-role">Developer</div>
            </div>
          </div>
          <div className="floating-card card-2">
            <div className="mini-avatar">B</div>
            <div className="mini-info">
              <div className="mini-name">Bob Smith</div>
              <div className="mini-role">Designer</div>
            </div>
          </div>
          <div className="floating-card card-3">
            <div className="mini-avatar">C</div>
            <div className="mini-info">
              <div className="mini-name">Carol White</div>
              <div className="mini-role">Manager</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3 className="feature-title">Amazing Community</h3>
              <p className="feature-description">
                Connect with talented individuals from around the world
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Fast & Reliable</h3>
              <p className="feature-description">
                Lightning-fast performance with 99.9% uptime guarantee
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">Beautiful Design</h3>
              <p className="feature-description">
                Modern and intuitive interface that users love
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Secure & Private</h3>
              <p className="feature-description">
                Your data is protected with enterprise-grade security
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Connections Made</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Countries</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9★</div>
            <div className="stat-label">User Rating</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">Mywebsite</div>
          <p className="footer-text">
            © 2024 Mywebsite. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;