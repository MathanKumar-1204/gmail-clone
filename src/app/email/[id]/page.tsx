"use client";
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Inbox from '../../components/Inbox';
import Starred from '../../components/Starred';
import Snoozed from '../../components/Snoozed';
import Sent from '../../components/Sent';
import Drafts from '../../components/Drafts';
import Trash from '../../components/Trash';
import Spam from '../../components/Spam';

const Home: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<string>('inbox'); // Default to 'inbox'
  const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query
  const [selectedTab, setSelectedTab] = useState<'Primary' | 'Promotions' | 'Social'>('Primary'); // State for tab selection


  const renderContent = () => {
    switch (selectedRoute) {
      case 'inbox':
        return <Inbox searchQuery={searchQuery} />; // Pass search query to Inbox
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
        return <Inbox searchQuery={searchQuery} />; 
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar onRouteChange={setSelectedRoute} selectedRoute={selectedRoute} />
      <div className="flex flex-col flex-1">
      <Header 
          setSearchQuery={setSearchQuery}   // Update search query in parent component
        />
        <div className="flex-1 p-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Home;
