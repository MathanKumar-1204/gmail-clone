import React from 'react';

const Drafts: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Drafts</h1>
      {/* Drafts email list placeholder */}
      <div className="bg-white p-4 rounded-lg shadow">
        <p>You have no drafts.</p>
      </div>
    </div>
  );
};

export default Drafts;
