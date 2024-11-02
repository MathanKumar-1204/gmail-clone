import React from 'react';

const Trash: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trash</h1>
      {/* Trash email list placeholder */}
      <div className="bg-white p-4 rounded-lg shadow">
        <p>Your trash is empty.</p>
      </div>
    </div>
  );
};

export default Trash;
