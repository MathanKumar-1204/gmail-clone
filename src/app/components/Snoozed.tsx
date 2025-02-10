import React from 'react';

const Snoozed: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Snoozed</h1>
      {/* Snoozed email list placeholder */}
      <div className="bg-white p-4 rounded-lg shadow">
        <p>You have no snoozed emails.</p>
      </div>
    </div>
  );
};

export default Snoozed;
