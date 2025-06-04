import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  
  const certificates = [
    {
      id: 'cert1',
      title: 'UiPath RPA Developer Foundation',
      issuer: 'UiPath Academy',
      date: 'March 2025',
      image: 'https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'cert2',
      title: 'UiPath Advanced Developer',
      issuer: 'UiPath Academy',
      date: 'January 2025',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'cert3',
      title: 'RPA Hackathon 2024 - 2nd Place',
      issuer: 'UiPath SDC',
      date: 'December 2024',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'cert4',
      title: 'Workshop Completion: AI with RPA',
      issuer: 'RGMCET UiPath SDC',
      date: 'November 2024',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-orange-500 dark:text-orange-400">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 dark:bg-orange-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Showcase your achievements and credentials in the field of RPA.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              onClick={() => setSelectedCert(cert.id)}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <span className="text-white font-medium flex items-center">
                    View Certificate
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for viewing certificate */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {certificates.find(c => c.id === selectedCert)?.title}
                </h3>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-4 overflow-auto max-h-[calc(90vh-4rem)]">
                <img 
                  src={certificates.find(c => c.id === selectedCert)?.image} 
                  alt={certificates.find(c => c.id === selectedCert)?.title} 
                  className="w-full h-auto"
                />
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <span className="font-semibold">Issuer:</span> {certificates.find(c => c.id === selectedCert)?.issuer}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Date:</span> {certificates.find(c => c.id === selectedCert)?.date}
                  </p>
                </div>
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <a 
            href="#"
            className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors duration-300"
          >
            Get UiPath Certified
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;