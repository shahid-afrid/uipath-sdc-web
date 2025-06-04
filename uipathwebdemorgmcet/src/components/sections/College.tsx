import React from 'react';
import { MapPin } from 'lucide-react';

const College: React.FC = () => {
  return (
    <section 
      id="college" 
      className="py-16 bg-cover bg-center relative"
      style={{ 
        backgroundImage: `url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-orange-900/70 dark:bg-gray-900/80 transition-colors duration-300"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our College
            </h2>
            <div className="w-20 h-1 bg-orange-500 dark:bg-orange-400 mx-auto mb-6"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8 flex justify-center">
              <div className="w-48 h-48 rounded-full border-4 border-orange-500 dark:border-orange-400 overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="College Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Rajeev Gandhi Memorial College of Engineering and Technology
              </h3>
              
              <div className="flex items-start mb-4">
                <MapPin className="w-5 h-5 text-orange-500 dark:text-orange-400 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">
                  Nandyal, Andhra Pradesh, India
                </p>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                RGMCET is committed to excellence in technical education and has partnered with UiPath to establish a Student Developer Community (SDC) focused on Robotic Process Automation. Our college provides state-of-the-art facilities and a supportive environment for students to learn and innovate in the field of automation.
              </p>
              
              <div className="bg-orange-50 dark:bg-gray-700 p-4 rounded-md">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Department of Computer Science & Engineering</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The Department of CSE at RGMCET is at the forefront of emerging technologies. We have dedicated faculty mentors for the UiPath SDC who guide students in learning and implementing RPA solutions for various domains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default College;