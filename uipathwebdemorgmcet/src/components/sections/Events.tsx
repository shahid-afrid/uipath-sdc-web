import React from 'react';
import { events } from '../../data/eventsData';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const Events: React.FC = () => {
  // Separate events by status
  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const completedEvents = events.filter(event => event.status === 'completed');

  return (
    <section id="events" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Events & <span className="text-orange-500 dark:text-orange-400">Workshops</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 dark:bg-orange-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Join our events and workshops to learn from experts, network with peers, and enhance your RPA skills.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
            Upcoming Events
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <div 
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-orange-500 dark:border-orange-400"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-sm font-semibold">
                    Upcoming
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{event.title}</h4>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-orange-500 dark:text-orange-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-orange-500 dark:text-orange-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{event.description}</p>
                  
                  <a 
                    href={event.link} 
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 font-medium transition-colors duration-200"
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <span className="inline-block w-3 h-3 bg-gray-400 rounded-full mr-2"></span>
            Past Events
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedEvents.map(event => (
              <div 
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-gray-300 dark:border-gray-600"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 filter grayscale-[30%]"
                  />
                  <div className="absolute top-0 right-0 bg-gray-500 text-white px-3 py-1 text-sm font-semibold">
                    Completed
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{event.title}</h4>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Users className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{event.participants} Participants</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{event.description}</p>
                  
                  <a 
                    href={event.link} 
                    className="inline-flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 font-medium transition-colors duration-200"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;