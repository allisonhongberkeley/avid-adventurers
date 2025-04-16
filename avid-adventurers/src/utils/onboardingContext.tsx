import React, { createContext, useContext, useState, ReactNode } from 'react';

interface OnboardingData {
  profileImage: File | null;
  firstName: string;
  city: string;
  age: string;
  pronouns: string;
  funFact: string;
  interests: string[];
  setProfileImage: (file: File | null) => void;
  setFirstName: (name: string) => void;
  setCity: (city: string) => void;
  setAge: (age: string) => void;
  setPronouns: (pronouns: string) => void;
  setFunFact: (fact: string) => void;
  setInterests: (interests: string[]) => void;
}

const OnboardingContext = createContext<OnboardingData | undefined>(undefined);

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [firstName, setFirstName] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [funFact, setFunFact] = useState('');
  const [interests, setInterests] = useState<string[]>([]);


  return (
    <OnboardingContext.Provider value={{
      profileImage,
      firstName,
      city,
      age,
      pronouns,
      funFact,
      interests,
      setProfileImage,
      setFirstName,
      setCity,
      setAge,
      setPronouns,
      setFunFact,
      setInterests,
    }}>
      {children}
    </OnboardingContext.Provider>
  );
};