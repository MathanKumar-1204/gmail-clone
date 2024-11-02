import React from 'react';

const Spam: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Spam</h1>
      {/* Spam email list placeholder */}
      <div className="bg-white p-4 rounded-lg shadow">
        <p>No spam emails found.</p>
      </div>
    </div>
  );
};

export default Spam;
