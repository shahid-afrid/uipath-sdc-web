import React from 'react';
import { Github, Disc as Discord, Linkedin, MessageSquare } from 'lucide-react';

const Community: React.FC = () => {
  const socialChannels = [
    {
      name: 'Discord',
      description: 'Join our Discord server for real-time discussions, help, and community events.',
      icon: <Discord className="w-8 h-8" />,
      color: 'bg-indigo-500 hover:bg-indigo-600',
      link: '#'
    },
    {
      name: 'GitHub',
      description: 'Collaborate on projects, share code, and contribute to our open-source repositories.',
      icon: <Github className="w-8 h-8" />,
      color: 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800',
      link: '#'
    },
    {
      name: 'LinkedIn',
      description: 'Connect with professionals, find opportunities, and stay updated with industry trends.',
      icon: <Linkedin className="w-8 h-8" />,
      color: 'bg-blue-600 hover:bg-blue-700',
      link: '#'
    },
    {
      name: 'WhatsApp Group',
      description: 'Join our WhatsApp group for announcements, quick questions, and community updates.',
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'bg-green-500 hover:bg-green-600',
      link: '#'
    }
  ];

  return (
    <section id="community" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our <span className="text-orange-500 dark:text-orange-400">Community</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 dark:bg-orange-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Connect with fellow RPA enthusiasts, ask questions, share knowledge, and collaborate on projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {socialChannels.map((channel, index) => (
            <a 
              key={index}
              href={channel.link}
              className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex"
            >
              <div className={`${channel.color} text-white p-6 flex items-center justify-center transition-all duration-300`}>
                {channel.icon}
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-200">
                  {channel.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {channel.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 bg-orange-50 dark:bg-gray-800 rounded-lg shadow-md p-8 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Weekly Community Meetups
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Join our weekly virtual meetups to discuss RPA trends, showcase your projects, and learn from each other's experiences.
              </p>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
                <p className="text-gray-900 dark:text-white font-medium">Next Meetup:</p>
                <p className="text-orange-500 dark:text-orange-400 font-bold">Friday, June 10, 2025 at 5:00 PM IST</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">Topic: Advanced Exception Handling in UiPath</p>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Community Meetup" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;