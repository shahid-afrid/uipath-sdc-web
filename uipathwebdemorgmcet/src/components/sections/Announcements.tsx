import React from 'react';
import { announcements } from '../../data/announcementsData';
import { Calendar, AlertTriangle, ArrowRight } from 'lucide-react';

const Announcements: React.FC = () => {
  return (
    <section id="announcements" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-orange-500 dark:text-orange-400">Announcements</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 dark:bg-orange-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest news, events, and opportunities from UiPath SDC.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {announcements.map((announcement) => (
              <div 
                key={announcement.id}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border-l-4 ${
                  announcement.isUrgent 
                    ? 'border-red-500 dark:border-red-400' 
                    : 'border-orange-500 dark:border-orange-400'
                } transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {announcement.title}
                    </h3>
                    {announcement.isUrgent && (
                      <span className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        Urgent
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{announcement.date}</span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {announcement.content}
                  </p>
                  
                  {announcement.link && (
                    <a 
                      href={announcement.link.url}
                      className={`inline-flex items-center px-4 py-2 rounded-md text-white font-medium ${
                        announcement.isUrgent
                          ? 'bg-red-500 hover:bg-red-600'
                          : 'bg-orange-500 hover:bg-orange-600'
                      } transition-colors duration-200`}
                    >
                      {announcement.link.text}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#"
            className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-orange-500 dark:text-orange-400 border border-orange-500 dark:border-orange-400 font-medium rounded-md transition-colors duration-300"
          >
            View All Announcements
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Announcements;