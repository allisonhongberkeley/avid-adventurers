import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface SurveyData {
  friendProfileImage: File | null;
  friendName: string;
  friendInterests: string[];
  setFriendInterests: (interests: string[]) => void;
  interests: string[];
  activity: string;
  rating: number;
  setRating: (rating: number) => void;
  experience: string;
  setExperience: (experience: string) => void;
  updateInterests: (interests: string[]) => void;
  setProfileImage: (file: File | null) => void;
}

const SurveyContext = createContext<SurveyData | undefined>(undefined);

export const useSurvey = () => {
  const context = useContext(SurveyContext);
  if (!context) {
    throw new Error('useSurvey must be used within a SurveyProvider');
  }
  return context;
};

export const SurveyProvider = ({ children }: { children: ReactNode }) => {
    const [friendProfileImage, setProfileImage] = useState<File | null>(null);
    const friendName = 'Tyler';
    const [friendInterests, setFriendInterests] = useState<string[]>(['skateboarding', 'hiking', 'sail']);
    const [interests, setInterests] = useState<string[]>(['paddleboarding', 'skateboarding', 'sail', 'hiking', 'coffee', 'wine tasting', 'concerts']); // current user's interests
    const activity = 'skateboarding';
    const [rating, setRating] = useState<number>(0);
    const [experience, setExperience] = useState<string>('');
  
    const updateInterests = (newInterests: string[]) => {
      setInterests((prev) => Array.from(new Set([...prev, ...newInterests])));
    };
  
    return (
      <SurveyContext.Provider
        value={{
          friendProfileImage,
          friendName,
          friendInterests,
          setFriendInterests, 
          interests,
          activity,
          rating,
          setRating,
          experience,
          setExperience,
          updateInterests,
          setProfileImage,
        }}
      >
        {children}
      </SurveyContext.Provider>
    );
  };