import React from 'react';
import { ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-orange-500 dark:text-orange-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 dark:bg-orange-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Explore innovative RPA solutions developed by our community members.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="w-full h-full rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                <span className="text-orange-500 dark:text-orange-400 text-4xl font-bold">!</span>
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-orange-500 dark:border-orange-400 border-dashed animate-spin-slow"></div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 animate-pulse">
              Projects Coming Soon
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Our community members are currently working on exciting RPA projects. Check back soon to see innovative automation solutions developed by students.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {[1, 2, 3].map((item) => (
                <div 
                  key={item}
                  className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 h-48 flex items-center justify-center blur-sm relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <p className="text-gray-400 dark:text-gray-500 text-center font-medium">
                    Project Placeholder
                  </p>
                </div>
              ))}
            </div>
            
            <a 
              href="#"
              className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors duration-300"
            >
              Submit Your Project Idea
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;