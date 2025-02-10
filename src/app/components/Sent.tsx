import React from 'react';

const Sent: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sent</h1>
      {/* Sent email list placeholder */}
      <div className="bg-white p-4 rounded-lg shadow">
        <p>You have no sent emails.</p>
      </div>
    </div>
  );
};

export default Sent;
