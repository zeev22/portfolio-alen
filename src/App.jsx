import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

// Import Components
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
import Projects, { FullImagePage } from './components/Projects';
import Contact from './components/Contact';
import BlogPost2 from './components/BlogPost2';
import ErrorBoundary from './components/ErrorBoundary';
import CertificateDetail from './components/CertificateDetail';

function App() {
  return (
    <Routes>
      {/* Default Route */}
      <Route
        path="/"
        element={
          <div className="app-container">
            {/* Hero Section */}
            <div className="hero-topBlur" />
            <Hero />

            {/* About Section */}
            <section id="about">
              <About />
            </section>

            {/* Experiences Section */}
            <section id="experiences">
              <Experiences />
            </section>

            {/* Projects Section */}
            <section id="projects">
              <Projects />
            </section>

            {/* Blog Post Section with Error Boundary */}
            <section id="blog-post2">
              <ErrorBoundary>
                <BlogPost2 />
              </ErrorBoundary>
            </section>

            {/* Contact Section */}
            <section id="contact">
              <Contact />
            </section>

            <div className="hero-bottomBlur" />
          </div>
        }
      />

      {/* Route for Certificate Detail */}
      <Route path="/certificate/:id" element={<CertificateDetail />} />

      {/* Route for Full Image Page */}
      <Route path="/full-image" element={<FullImagePage />} />

      {/* 404 Page Not Found */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}

export default App;