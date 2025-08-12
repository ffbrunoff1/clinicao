import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
