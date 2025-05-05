import React, { createContext, useContext, useState, ReactNode } from 'react';

type BucketlistContextType = {
  bucketlist: string[];
  addToBucketlist: (eventSlug: string) => void;
  removeFromBucketlist: (eventSlug: string) => void;
};

const BucketlistContext = createContext<BucketlistContextType | undefined>(undefined);

export const useBucketlist = () => {
  const context = useContext(BucketlistContext);
  if (!context) throw new Error('useBucketlist must be used within a BucketlistProvider');
  return context;
};

export const BucketlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bucketlist, setBucketlist] = useState<string[]>([]);

  const addToBucketlist = (eventSlug: string) => {
    setBucketlist((prev) => (prev.includes(eventSlug) ? prev : [...prev, eventSlug]));
  };

  const removeFromBucketlist = (eventSlug: string) => {
    setBucketlist((prev) => prev.filter((slug) => slug !== eventSlug));
  };

  return (
    <BucketlistContext.Provider value={{ bucketlist, addToBucketlist, removeFromBucketlist }}>
      {children}
    </BucketlistContext.Provider>
  );
};
