import React from 'react';
import { MapPin, Mail, Phone, Github as GitHub, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-12 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">UiPath SDC</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Student Developer Community portal for automation enthusiasts. Learn, build, and grow with RPA technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors duration-200">
                <GitHub className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors duration-200">About UiPath SDC</a>
              </li>
              <li>
                <a href="#learn" className="text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors duration-200">Learn RPA</a>
              </li>
              <li>
                <a href="#events" className="text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors duration-200">Events & Workshops</a>
              </li>
              <li>
                <a href="#community" className="text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors duration-200">Join Community</a>
              </li>
              <li>
                <a href="#roadmap" className="text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors duration-200">RPA Roadmap</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-500 dark:text-orange-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-300">
                  Rajeev Gandhi Memorial College of Engineering and Technology, Nandyal, Andhra Pradesh
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-orange-500 dark:text-orange-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@uipathsdc.edu" className="text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors duration-200">
                  uipathsdc@rgmcet.edu.in
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-orange-500 dark:text-orange-400 mr-3 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors duration-200">
                  +91 9876543210
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-6">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} UiPath SDC at RGMCET. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;