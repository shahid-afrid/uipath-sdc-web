import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

type NavbarProps = {
  activeSection: string;
};

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About UiPath SDC', href: '#about' },
    { name: 'My College', href: '#college' },
    { name: 'Learn RPA', href: '#learn' },
    { name: 'Events', href: '#events' }
  ];

  const moreLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Community', href: '#community' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Announcements', href: '#announcements' }
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    setShowMore(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold text-orange-500 flex items-center">
              <span className="text-orange-600 dark:text-orange-400">UiPath</span>
              <span className="ml-1 text-orange-500 dark:text-orange-300">SDC</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(link.href.substring(1));
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-orange-500 dark:hover:text-orange-400 ${
                  activeSection === link.href.substring(1)
                    ? 'text-orange-600 dark:text-orange-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* More dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowMore(!showMore)}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:text-orange-500 dark:hover:text-orange-400 flex items-center"
              >
                More
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${showMore ? 'rotate-180' : ''}`} />
              </button>

              {showMore && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-20">
                  {moreLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollTo(link.href.substring(1));
                      }}
                      className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
                        activeSection === link.href.substring(1)
                          ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-gray-700'
                          : ''
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 mr-2"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-b-lg shadow-lg">
            <div className="pt-2 space-y-1">
              {[...navLinks, ...moreLinks].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(link.href.substring(1));
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    activeSection === link.href.substring(1)
                      ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-gray-800'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {link.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;