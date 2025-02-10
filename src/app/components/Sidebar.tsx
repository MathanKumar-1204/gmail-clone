import React, { useState } from 'react';
import { MenuIcon, PencilIcon } from '@heroicons/react/outline';

interface SidebarProps {
  onRouteChange: (route: string) => void; // Function to change route
  selectedRoute: string;                  // Current selected route
}

const Sidebar: React.FC<SidebarProps> = ({ onRouteChange, selectedRoute }) => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showComposeModal, setShowComposeModal] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const toggleMoreOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`h-screen bg-gray-100 p-4 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}
    >
      <div className="flex items-center justify-between mb-8">
        <MenuIcon className="h-6 w-6 text-gray-600 cursor-pointer" onClick={toggleSidebar} />
        {isOpen && (
          <img
            src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-0.png"
            alt="Gmail Logo"
            className="h-[100px] w-[100px]"
          />
        )}
      </div>

      <button
        onClick={() => setShowComposeModal(true)}
        className="flex items-center space-x-2 bg-blue-200 text-blue-700 px-4 py-2 rounded-full mb-4 w-full hover:bg-blue-300 transition"
      >
        <PencilIcon className="h-5 w-5" />
        {isOpen && <span>Compose</span>}
      </button>

      <div className="space-y-4">
        <button
          onClick={() => onRouteChange('inbox')}  // Trigger route change
          className={`flex items-center space-x-2 w-full text-left p-2 rounded-lg ${selectedRoute === 'inbox' ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
        >
          <span className="h-5 w-5">📨</span>
          {isOpen && <span>Inbox</span>}
        </button>

        <button
          onClick={() => onRouteChange('starred')}
          className={`flex items-center space-x-2 w-full text-left p-2 rounded-lg ${selectedRoute === 'starred' ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
        >
          <span className="h-5 w-5">⭐</span>
          {isOpen && <span>Starred</span>}
        </button>

        <button
          onClick={() => onRouteChange('snoozed')}
          className={`flex items-center space-x-2 w-full text-left p-2 rounded-lg ${selectedRoute === 'snoozed' ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
        >
          <span className="h-5 w-5">⏰</span>
          {isOpen && <span>Snoozed</span>}
        </button>

        <button
          onClick={() => onRouteChange('sent')}
          className={`flex items-center space-x-2 w-full text-left p-2 rounded-lg ${selectedRoute === 'sent' ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
        >
          <span className="h-5 w-5">📤</span>
          {isOpen && <span>Sent</span>}
        </button>

        <button
          onClick={() => onRouteChange('drafts')}
          className={`flex items-center space-x-2 w-full text-left p-2 rounded-lg ${selectedRoute === 'drafts' ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
        >
          <span className="h-5 w-5">📝</span>
          {isOpen && <span>Drafts</span>}
        </button>

        <button onClick={toggleMoreOptions} className="flex items-center space-x-2 w-full text-left p-2 hover:bg-gray-200 rounded-lg">
          <span className="h-5 w-5">⋯</span>
          {isOpen && <span>{showMoreOptions ? 'Less' : 'More'}</span>}
        </button>

        {showMoreOptions && (
          <div className="pl-6 space-y-4">
            <button
              onClick={() => onRouteChange('trash')}
              className="flex items-center space-x-2 w-full text-left p-2 hover:bg-gray-200 rounded-lg"
            >
              <span className="h-5 w-5">🗑️</span>
              {isOpen && <span>Trash</span>}
            </button>
            <button
              onClick={() => onRouteChange('spam')}
              className="flex items-center space-x-2 w-full text-left p-2 hover:bg-gray-200 rounded-lg"
            >
              <span className="h-5 w-5">📂</span>
              {isOpen && <span>Spam</span>}
            </button>
          </div>
        )}
      </div>

      {showComposeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-4 w-1/3">
            <h2 className="text-lg font-bold mb-2">Compose Mail</h2>
            <input type="text" placeholder="Recipient" className="border p-2 rounded mb-2 w-full" />
            <input type="text" placeholder="Subject" className="border p-2 rounded mb-2 w-full" />
            <textarea placeholder="Your message here..." className="border p-2 rounded mb-4 w-full" rows={4}></textarea>
            <div className="flex justify-end">
              <button
                onClick={() => setShowComposeModal(false)}
                className="bg-gray-300 hover:bg-gray-400 rounded px-4 py-2"
              >
                Cancel
              </button>
              <button className="bg-blue-500 text-white hover:bg-blue-600 rounded px-4 py-2 ml-2">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
