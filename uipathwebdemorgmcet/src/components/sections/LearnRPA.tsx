import React, { useState } from 'react';
import { resources } from '../../data/resourcesData';
import { Clock, BookOpen, ExternalLink } from 'lucide-react';

const LearnRPA: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const filters = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredResources = activeFilter === 'All'
    ? resources
    : resources.filter(resource => resource.level === activeFilter);

  return (
    <section id="learn" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Learn <span className="text-orange-500 dark:text-orange-400">RPA</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 dark:bg-orange-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our curated collection of learning resources to start your journey in Robotic Process Automation.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeFilter === filter
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map(resource => (
            <div
              key={resource.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    resource.level === 'Beginner' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : resource.level === 'Intermediate'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                  }`}>
                    {resource.level}
                  </span>
                  <span className={`text-xs font-medium ${
                    resource.free ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {resource.free ? 'Free' : 'Paid'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{resource.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {resource.duration && (
                    <div className="flex items-center mr-4">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{resource.duration}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    <span>{resource.provider}</span>
                  </div>
                </div>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors duration-200"
                >
                  Start Learning
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnRPA;