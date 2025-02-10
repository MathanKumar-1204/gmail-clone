"use client"; // Render client-side

import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Import useRouter for Next.js 13+

type Email = {
  id: number;
  subject: string;
  snippet: string;
  sender: string;
  date: string;
  unread: boolean;
  starred: boolean;
  body: string;
  category: 'Primary' | 'Promotions' | 'Social'; // Email category types
};

interface InboxProps {
  searchQuery: string;
}

const Inbox: React.FC<InboxProps> = ({ searchQuery }) => {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null); // State for selected email
  const router = useRouter(); // useRouter for managing query params
  const searchParams = new URLSearchParams(window.location.search); // Get query params
  const activeTab = searchParams.get('category') || 'Primary'; // Default to 'Primary' if not present

  // Mock email data
  const mockEmails: Email[] = [
    { id: 1, subject: 'Welcome to Gmail', snippet: 'This is your Gmail clone', sender: 'Google', date: 'Today', unread: true, starred: false, body: 'Welcome to your new Gmail clone. Here are some tips to get started...', category: 'Primary' },
    { id: 2, subject: 'React Project', snippet: 'Let’s work on the React project', sender: 'John', date: 'Yesterday', unread: false, starred: true, body: 'Hi, let’s collaborate on the React project. Here’s what we need to do...', category: 'Primary' },
    { id: 3, subject: 'Tailwind CSS Tips', snippet: 'Learn Tailwind CSS quickly', sender: 'Tailwind Team', date: '2 Days Ago', unread: false, starred: false, body: 'Tailwind CSS is a utility-first framework. Here are some tips and tricks...', category: 'Promotions' },
    { id: 4, subject: 'New social platform', snippet: 'Join our new platform!', sender: 'Social Team', date: '3 Days Ago', unread: false, starred: false, body: 'Connect with others on our new platform...', category: 'Social' },
  ];

  // Filter emails based on the active tab and search query
  const filteredEmails = mockEmails.filter(
    (email) =>
      email.category === activeTab && // Filter by active category
      (email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.sender.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Handle tab clicks to update the query params
  const handleTabClick = (tab: string) => {
    router.push(`/?category=${tab}`); // Update the category in the query params
  };

  // Handle email click
  const handleEmailClick = (email: Email) => {
    setSelectedEmail(email); // Set selected email
  };

  // Go back to inbox list view
  const handleBackToInbox = () => {
    setSelectedEmail(null); // Clear selected email
  };

  return (
    <div className="flex-1 p-4">
      {/* Tabs for Primary, Promotions, and Social */}
      <div className="flex justify-around border-b-2 mb-4">
        {['Primary', 'Promotions', 'Social'].map((tab) => (
          <span
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`cursor-pointer pb-2 px-4 ${activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
          >
            {tab}
          </span>
        ))}
      </div>

      {selectedEmail ? (
        // Display selected email details
        <div>
          <button className="mb-4 text-blue-500" onClick={handleBackToInbox}>Back to Inbox</button>
          <div className="p-4 border rounded shadow-lg bg-white">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">{selectedEmail.subject}</h2>
                <p className="text-gray-500">From: {selectedEmail.sender}</p>
                <p className="text-gray-500">{selectedEmail.date}</p>
              </div>
              <div>
                {selectedEmail.starred ? (
                  <FaStar className="text-yellow-400" />
                ) : (
                  <FaRegStar className="text-gray-400" />
                )}
              </div>
            </div>
            <div className="mt-4">
              <p>{selectedEmail.body}</p> {/* Show email body */}
            </div>
          </div>
        </div>
      ) : (
        // Inbox email list view
        <div className="space-y-4">
          {filteredEmails.map((email) => (
            <div
              key={email.id}
              className={`flex justify-between items-center p-4 border-b hover:bg-gray-50 cursor-pointer ${email.unread ? 'font-bold bg-gray-100' : ''}`}
              onClick={() => handleEmailClick(email)} // Handle email selection
            >
              <div className="flex items-center space-x-4">
                <input type="checkbox" className="cursor-pointer" />
                <button>
                  {email.starred ? <FaStar className="text-yellow-400" /> : <FaRegStar className="text-gray-400" />}
                </button>
                <div className="flex space-x-4">
                  <span className="w-40 truncate">{email.sender}</span>
                  <span className="w-60 truncate">{email.subject} - {email.snippet}</span>
                </div>
              </div>
              <div className="text-gray-400">{email.date}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Inbox;
