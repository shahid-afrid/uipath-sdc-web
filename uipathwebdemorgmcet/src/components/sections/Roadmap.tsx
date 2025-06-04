import React, { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp, ArrowRight, BookOpen, Code, Award } from 'lucide-react';

const Roadmap: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const toggleStep = (stepIndex: number) => {
    setActiveStep(activeStep === stepIndex ? null : stepIndex);
  };

  const roadmapSteps = [
    {
      title: 'Foundation',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Learn the basics of RPA and UiPath Studio',
      details: [
        'Complete UiPath Academy RPA Developer Foundation course',
        'Install UiPath Studio and learn the interface',
        'Understand basic automation concepts and workflows',
        'Learn basic selectors and recording techniques',
        'Build your first simple automation'
      ],
      resources: [
        { name: 'UiPath Academy', link: '#' },
        { name: 'RPA Essentials Course', link: '#' }
      ]
    },
    {
      title: 'Intermediate',
      icon: <Code className="w-6 h-6" />,
      description: 'Develop more complex automation skills',
      details: [
        'Learn advanced selectors and UI automation techniques',
        'Master Excel and data manipulation activities',
        'Understand error handling and debugging',
        'Learn to use Orchestrator for deployment',
        'Build projects with real-world applications'
      ],
      resources: [
        { name: 'Advanced UiPath Techniques', link: '#' },
        { name: 'Error Handling Workshop', link: '#' }
      ]
    },
    {
      title: 'Advanced',
      icon: <Award className="w-6 h-6" />,
      description: 'Master advanced RPA concepts and techniques',
      details: [
        'Learn AI Computer Vision and Document Understanding',
        'Implement complex business workflows',
        'Master advanced programming concepts in RPA',
        'Learn API integration and web services',
        'Build enterprise-grade automation solutions'
      ],
      resources: [
        { name: 'UiPath Advanced Developer Course', link: '#' },
        { name: 'AI Integration Workshop', link: '#' }
      ]
    },
    {
      title: 'Certification',
      icon: <Award className="w-6 h-6" />,
      description: 'Get certified and validate your skills',
      details: [
        'Prepare for UiPath Certified RPA Associate exam',
        'Take practice tests and mock exams',
        'Review all concepts and best practices',
        'Complete the certification exam',
        'Add certification to your resume and LinkedIn'
      ],
      resources: [
        { name: 'Certification Prep Course', link: '#' },
        { name: 'Practice Exams', link: '#' }
      ]
    },
    {
      title: 'Community Leadership',
      icon: <Award className="w-6 h-6" />,
      description: 'Give back to the community and mentor others',
      details: [
        'Participate in RPA hackathons and events',
        'Create and share learning content',
        'Mentor beginners in the community',
        'Contribute to open-source RPA projects',
        'Become a UiPath SDC champion'
      ],
      resources: [
        { name: 'Mentorship Program', link: '#' },
        { name: 'Community Projects', link: '#' }
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            RPA Developer <span className="text-orange-500 dark:text-orange-400">Roadmap</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 dark:bg-orange-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Follow this roadmap to become a proficient RPA developer with UiPath.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-orange-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

            {/* Steps */}
            {roadmapSteps.map((step, index) => (
              <div 
                key={index} 
                className={`relative mb-8 ${index % 2 === 0 ? 'md:ml-auto md:pl-8 md:pr-0' : 'md:mr-auto md:pr-8 md:pl-0'} md:w-1/2 pl-16`}
              >
                {/* Circle on the timeline */}
                <div className="absolute left-0 md:left-1/2 top-0 w-16 h-16 bg-white dark:bg-gray-800 rounded-full border-4 border-orange-500 dark:border-orange-400 transform -translate-x-1/2 flex items-center justify-center z-10">
                  {step.icon}
                </div>

                {/* Content card */}
                <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${
                  activeStep === index ? 'border-l-4 border-orange-500 dark:border-orange-400' : ''
                }`}>
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleStep(index)}
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <button className="text-orange-500 dark:text-orange-400">
                      {activeStep === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {step.description}
                  </p>
                  
                  {activeStep === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Activities:</h4>
                      <ul className="space-y-2 mb-4">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Recommended Resources:</h4>
                      <ul className="space-y-2">
                        {step.resources.map((resource, i) => (
                          <li key={i}>
                            <a 
                              href={resource.link} 
                              className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 flex items-center"
                            >
                              <ArrowRight className="w-4 h-4 mr-2" />
                              {resource.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;