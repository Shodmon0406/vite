// LoadingSpinner.jsx
import React from 'react';
import { RingLoader } from 'react-spinners';

const LoadingSpinner = ({ loading }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <RingLoader color="#3498db" loading={loading} size={150} />
    </div>
  );
};

export default LoadingSpinner;
