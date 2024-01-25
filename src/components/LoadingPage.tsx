import React from 'react';

const LoadingPage = () => {
  return (
    <div
      role="status"
      className="
      background-light900_dark200
      h-full
      w-full
      animate-pulse
      rounded-md
    "
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingPage;
