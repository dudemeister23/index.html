import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Competencies from './components/Competencies';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main>
        <Hero />
        <Competencies />
        <Experience />
        <Portfolio />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default App;