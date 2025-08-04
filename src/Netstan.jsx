import React from "react";
import "./Netstan.css";

// Icon Components
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-2 h-5 w-5"
  >
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="stat-icon"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="stat-icon"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" x2="22" y1="12" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const AwardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="stat-icon"
  >
    <circle cx="12" cy="8" r="6"></circle>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
  </svg>
);

const ZapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="stat-icon"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="service-icon"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="service-icon"
  >
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const ServerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="service-icon"
  >
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
    <line x1="6" x2="6.01" y1="6" y2="6"></line>
    <line x1="6" x2="6.01" y1="18" y2="18"></line>
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="check-icon"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="star-icon"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const NetStanTechnology = () => {
  // WhatsApp function for Get Started, Learn More, Know More buttons
  const handleWhatsApp = () => {
    window.open("https://wa.me/2349154416169", "_blank");
  };

  // Email function for Contact Us buttons
  const handleContactUs = () => {
    window.location.href = "mailto:info@netstantechnology.com";
  };

  const stats = [
    { icon: <UsersIcon />, number: "1000+", label: "Happy Clients" },
    { icon: <GlobeIcon />, number: "5000+", label: "Domains Managed" },
    { icon: <AwardIcon />, number: "99.9%", label: "Uptime Guarantee" },
    { icon: <ZapIcon />, number: "24/7", label: "Expert Support" },
  ];

  const services = [
    {
      icon: <GlobeIcon />,
      title: "Domain Registration",
      description:
        "Secure your perfect domain name with our easy registration process and competitive pricing.",
      features: [
        "Free WHOIS privacy",
        "24/7 domain management",
        "Auto-renewal options",
        "DNS management tools",
      ],
    },
    {
      icon: <CodeIcon />,
      title: "Website Creation",
      description:
        "Professional, responsive websites tailored to your business needs and brand identity.",
      features: [
        "Custom design",
        "Mobile responsive",
        "SEO optimized",
        "Content management",
      ],
    },
    {
      icon: <MailIcon />,
      title: "Email Marketing",
      description:
        "Powerful email campaigns that engage your audience and drive conversions.",
      features: [
        "Drag & drop builder",
        "Advanced analytics",
        "Automation workflows",
        "A/B testing",
      ],
    },
    {
      icon: <ServerIcon />,
      title: "Email Hosting",
      description:
        "Reliable, secure email hosting with professional features for your business.",
      features: [
        "99.9% uptime",
        "Spam protection",
        "Mobile sync",
        "Unlimited storage",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Victor Olaiya",
      company: "Idcode Nigeria Limited",
      review:
        "Their web services transformed our online presence completely. Professional, fast, and reliable!",
    },
    {
      name: "Sofia Frank",
      company: "CV City",
      review:
        "From domain to hosting, they handled everything seamlessly. Our website looks amazing!",
    },
    {
      name: "Mustapha Yahaya",
      company: "Paysushi.com",
      review:
        "The email marketing tools boosted our engagement by 300%. Incredible results!",
    },
  ];

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Netstan Technology</h1>
            <p className="hero-subtitle">
              Your complete digital solution for domains, websites, and email
              services. Transform your online presence with our professional web
              services.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleWhatsApp}>
                Get Started Today
                <ArrowRightIcon />
              </button>
              <button className="btn btn-secondary" onClick={handleContactUs}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="hero-decoration hero-decoration-1"></div>
        <div className="hero-decoration hero-decoration-2"></div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                {stat.icon}
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to establish and grow your online presence,
              all in one place.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div className="service-icon-wrapper">{service.icon}</div>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="service-feature">
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-service" onClick={handleWhatsApp}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="section-subtitle">
              Don't just take our word for it. Here's what our satisfied clients
              have to say.
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, starIndex) => (
                    <StarIcon key={starIndex} />
                  ))}
                </div>
                <p className="testimonial-review">"{testimonial.review}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-company">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-subtitle">
              Join thousands of satisfied clients and transform your online
              presence today.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={handleWhatsApp}>
                Start Your Project
                <ArrowRightIcon />
              </button>
              <button className="btn btn-secondary" onClick={handleContactUs}>
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <h3 className="footer-title">NetStan Technology</h3>
              <p className="footer-description">
                Your trusted partner for all web services. From domains to
                hosting, we've got everything you need to succeed online.
              </p>
            </div>
            <div className="footer-services">
              <h4 className="footer-section-title">Services</h4>
              <ul className="footer-links">
                <li>Domain Registration</li>
                <li>Website Creation</li>
                <li>Email Marketing</li>
                <li>Email Hosting</li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4 className="footer-section-title">Contact</h4>
              <ul className="footer-links">
                <li>support@netstantechnology.com</li>
                <li>+2349154416169</li>
                <li>+2347035385554</li>
                <li>24/7 Live Chat</li>
                <li>Help Center</li>
              </ul>
              <div className="footer-social">
                <div className="social-icon">
                  <MailIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 NetStan Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NetStanTechnology;
