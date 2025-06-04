import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import College from './components/sections/College';
import LearnRPA from './components/sections/LearnRPA';
import Events from './components/sections/Events';
import Projects from './components/sections/Projects';
import Community from './components/sections/Community';
import Blogs from './components/sections/Blogs';
import Certifications from './components/sections/Certifications';
import Roadmap from './components/sections/Roadmap';
import Announcements from './components/sections/Announcements';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollY = window.scrollY;
        
        if (scrollY >= sectionTop - 100 && scrollY < sectionTop + sectionHeight - 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar activeSection={activeSection} />
        <main>
          <Home />
          <About />
          <College />
          <LearnRPA />
          <Events />
          <Projects />
          <Community />
          <Blogs />
          <Certifications />
          <Roadmap />
          <Announcements />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}

export default App;