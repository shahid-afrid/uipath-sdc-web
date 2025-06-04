import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hi there! How can I help you today?", isUser: false }
  ]);
  const [inputText, setInputText] = useState('');

  const dummyResponses: Record<string, string> = {
    "what is uipath sdc": "UiPath Student Developer Community (SDC) is a program that aims to foster automation skills among students. It provides resources, training, and community support to learn RPA (Robotic Process Automation) technology.",
    "how can i join": "To join the UiPath SDC, you can click on the 'Join Community' section on our website and fill out the registration form. You'll get access to learning resources, events, and our community channels.",
    "where can i learn rpa": "You can learn RPA through the 'Learn RPA' section on our website. We provide links to UiPath Academy courses, tutorials, and other learning resources to help you get started with automation.",
    "default": "Thanks for your message! Our team will get back to you soon. Meanwhile, you can explore our website for more information about UiPath SDC."
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    // Add user message
    setMessages([...messages, { text: inputText, isUser: true }]);
    
    // Generate response
    setTimeout(() => {
      const lowercaseInput = inputText.toLowerCase();
      let responseText = dummyResponses.default;
      
      // Check for matching responses
      Object.keys(dummyResponses).forEach(key => {
        if (lowercaseInput.includes(key)) {
          responseText = dummyResponses[key];
        }
      });
      
      setMessages(prev => [...prev, { text: responseText, isUser: false }]);
    }, 600);
    
    setInputText('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-orange-500 hover:bg-orange-600'
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageSquare className="w-6 h-6 text-white" />
        )}
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all duration-300 animate-fadeIn">
          {/* Chat header */}
          <div className="bg-orange-500 dark:bg-orange-600 p-4">
            <h3 className="text-white font-medium">UiPath SDC Assistant</h3>
            <p className="text-orange-100 text-sm">Ask me anything about UiPath SDC</p>
          </div>
          
          {/* Chat messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-3/4 p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-orange-500 text-white rounded-tr-none'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          {/* Chat input */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex items-center">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-200"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;