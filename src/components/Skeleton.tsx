import React from 'react';

const Skeleton = () => {
  return (
    <div role="status" className="max-w-lg animate-pulse space-y-2.5">
      <div className="background-light700_dark400 h-2.5 rounded-full" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton;
