import React, { useState } from 'react';
import { FaCommentDots, FaTimes } from 'react-icons/fa';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi 👋 I'm Sanjay's AI Assistant. Ask me about my projects, experience, or skills!" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);

    // Simulated bot response (replace with actual backend integration)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: "Thanks for your question! I'll get back with more info shortly." }
      ]);
    }, 1000);

    setInput('');
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <button
            className="bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700"
            onClick={() => setIsOpen(true)}
          >
            <FaCommentDots size={24} />
          </button>
        ) : (
          <div className="w-80 h-96 bg-white shadow-xl rounded-lg flex flex-col">
            <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
              <span>Sanjay's AI Assistant</span>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-md max-w-[75%] ${
                    msg.sender === 'user' ? 'ml-auto bg-blue-100' : 'bg-gray-200'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="p-3 border-t flex gap-2">
              <input
                className="flex-1 border rounded p-2 text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatbotWidget;
