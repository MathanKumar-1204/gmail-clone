"use client";
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Inbox from './components/Inbox';
import Starred from './components/Starred';
import Snoozed from './components/Snoozed';
import Sent from './components/Sent';
import Drafts from './components/Drafts';
import Trash from './components/Spam';
import Spam from './components/Trash';

const Home: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<string>('inbox'); // Default to 'inbox'
  const [searchQuery, setSearchQuery] = useState<string>(''); // State to handle search query

  const renderContent = () => {
    switch (selectedRoute) {
      case 'inbox':
        return <Inbox searchQuery={searchQuery} />; // Pass searchQuery as prop
      case 'starred':
        return <Starred />;
      case 'snoozed':
        return <Snoozed />;
      case 'sent':
        return <Sent />;
      case 'drafts':
        return <Drafts />;
      case 'trash':
        return <Trash />;
      case 'spam':
        return <Spam />;
      default:
        return <Inbox searchQuery={searchQuery} />; // Default to Inbox
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar onRouteChange={setSelectedRoute} selectedRoute={selectedRoute} />  {/* Pass state handlers */}
      <div className="flex flex-col flex-1">
        <Header setSearchQuery={setSearchQuery} /> {/* Pass setSearchQuery to Header */}
        <div className="flex-1 p-4">{renderContent()}</div>  {/* Conditionally render content */}
      </div>
    </div>
  );
};

export default Home;
