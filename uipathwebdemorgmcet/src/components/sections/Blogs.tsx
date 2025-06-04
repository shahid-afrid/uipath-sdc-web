import React from 'react';
import { blogPosts } from '../../data/blogData';
import { Clock, User, Tag, ChevronRight } from 'lucide-react';

const Blogs: React.FC = () => {
  // Get the latest blog post
  const latestPost = blogPosts[0];
  
  // Get the remaining blog posts
  const otherPosts = blogPosts.slice(1);

  return (
    <section id="blogs" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest <span className="text-orange-500 dark:text-orange-400">Blogs</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 dark:bg-orange-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights in the world of RPA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Featured latest post */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
              <div className="md:flex h-full">
                <div className="md:w-1/2">
                  <img 
                    src={latestPost.image} 
                    alt={latestPost.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center mr-4">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{latestPost.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{latestPost.author}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-orange-500 dark:text-orange-400 uppercase tracking-wider">Latest Post</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-3">{latestPost.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{latestPost.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {latestPost.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 font-medium"
                  >
                    Read Full Article
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Other posts in a vertical list */}
          <div className="space-y-6">
            {otherPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center mr-4">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href="#" 
                      className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 text-sm font-medium"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="text-center pt-4">
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 border border-orange-500 dark:border-orange-400 text-orange-500 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-800 font-medium rounded-md transition-colors duration-200"
              >
                View All Blog Posts
                <ChevronRight className="w-5 h-5 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;