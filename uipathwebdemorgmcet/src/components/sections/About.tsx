import React from 'react';
import { teamMembers } from '../../data/teamData';
import { Github, Linkedin, Twitter } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-orange-500 dark:text-orange-400">UiPath SDC</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 dark:bg-orange-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            The UiPath Student Developer Community (SDC) at RGMCET is dedicated to fostering automation skills among students through learning, collaboration, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="flex justify-center">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="UiPath SDC Community" 
              className="rounded-lg shadow-xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We aim to empower students with the skills and knowledge to become proficient RPA developers. Through workshops, training sessions, hackathons, and industry connections, we bridge the gap between academic learning and industry requirements.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-orange-500 dark:text-orange-400 font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Education</h4>
                  <p className="text-gray-700 dark:text-gray-300">Providing quality learning resources and hands-on training in RPA technologies.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-orange-500 dark:text-orange-400 font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Community</h4>
                  <p className="text-gray-700 dark:text-gray-300">Building a supportive network of students, educators, and industry professionals.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-orange-500 dark:text-orange-400 font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Innovation</h4>
                  <p className="text-gray-700 dark:text-gray-300">Encouraging students to develop innovative automation solutions for real-world problems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Meet Our Core Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h4>
                  <p className="text-orange-500 dark:text-orange-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    {member.social.github && (
                      <a href={member.social.github} className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors duration-200">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors duration-200">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors duration-200">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;