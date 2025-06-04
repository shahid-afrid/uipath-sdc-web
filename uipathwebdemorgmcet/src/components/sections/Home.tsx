import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subTitleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple fade-in animations for the elements
    const title = titleRef.current;
    const subtitle = subTitleRef.current;
    const buttons = buttonsRef.current;
    const image = imageRef.current;

    if (title && subtitle && buttons && image) {
      title.classList.add('animate-fadeIn');
      setTimeout(() => {
        subtitle.classList.add('animate-fadeIn');
      }, 200);
      setTimeout(() => {
        buttons.classList.add('animate-fadeIn');
      }, 400);
      setTimeout(() => {
        image.classList.add('animate-fadeIn');
      }, 600);
    }
  }, []);

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-white to-orange-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div 
              ref={titleRef} 
              className="opacity-0 transition-opacity duration-1000"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                Welcome to <span className="text-orange-500 dark:text-orange-400">UiPath SDC</span> Portal
              </h1>
            </div>
            <div 
              ref={subTitleRef} 
              className="opacity-0 transition-opacity duration-1000 delay-200"
            >
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                The Future of Automation Starts Here. Explore, Learn, and Build with the Robotic Process Automation Community at RGMCET.
              </p>
            </div>
            <div 
              ref={buttonsRef} 
              className="opacity-0 transition-opacity duration-1000 delay-400 flex flex-wrap gap-4"
            >
              <a 
                href="#community" 
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors duration-300 flex items-center"
              >
                Join Our Community
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#learn" 
                className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-orange-500 dark:text-orange-400 border border-orange-500 dark:border-orange-400 font-medium rounded-md transition-colors duration-300"
              >
                Start Learning
              </a>
            </div>
          </div>
          <div 
            ref={imageRef} 
            className="md:w-1/2 opacity-0 transition-opacity duration-1000 delay-600"
          >
            <img 
              src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="UiPath SDC" 
              className="w-full h-auto rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;