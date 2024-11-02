import React from 'react';

const Starred: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Starred</h1>
      {/* Starred email list placeholder */}
      <div className="bg-white p-4 rounded-lg shadow">
        <p>You have no starred emails.</p>
      </div>
    </div>
  );
};

export default Starred;
