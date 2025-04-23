import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/onboarding/Profile';
import Age from './pages/onboarding/Age';
import Interests from './pages/onboarding/Interests';
import ProfileDisplay from './pages/onboarding/ProfileDisplay/ProfileDisplay';
import Congrats from './pages/survey/Congrats';
import Rate from './pages/survey/Rate';
import Rated from './pages/survey/Rated';
import Help from './pages/survey/Help';
import Interested from './pages/survey/Interested';
import Commonality from './pages/survey/Commonality';
import End from './pages/survey/End';
import Uninterested from './pages/survey/Uninterested';
import Confirmation from './pages/survey/Confirmation';
import { OnboardingProvider } from './utils/onboardingContext';
import Events from './pages/Home';

import TempBucket from "./pages/TempBucket";
import TempChat from "./pages/TempChat";
import TempProfile from "./pages/TempProfile";
import { SurveyProvider } from './utils/surveyContext';

import EventDetails from "./pages/events/EventDetails";
import { ProfileCard } from './components/ProfileCard';
import './App.css';

function App() {
  return (
    <Router>
      <OnboardingProvider>
        <Routes>
          <Route path="/" element={<ProfileCard />} />
          <Route path="/onboarding/profile" element={<Profile />} />
          <Route path="/onboarding/age" element={<Age />} />
          <Route path="/onboarding/interests" element={<Interests />} />
          <Route path="/onboarding/profileDisplay" element={<ProfileDisplay />} />
          <Route path="/tempBucket" element={<TempBucket />} />
          <Route path="/tempChat" element={<TempChat />} />
          <Route path="/tempProfile" element={<TempProfile />} />
          <Route path="/home" element={<Events />} />
          <Route path="/events/:eventSlug" element={<EventDetails />} />      
        </Routes>
      </OnboardingProvider>
      <SurveyProvider>
        <Routes>
          <Route path="/survey/congrats" element={<Congrats />} />
          <Route path="/survey/rate" element={<Rate />} />
          <Route path="/survey/rated" element={<Rated />} />
          <Route path="/survey/help" element={<Help />} />
          <Route path="/survey/interested" element={<Interested />} />
          <Route path="/survey/commonality" element={<Commonality />} />
          <Route path="/survey/end" element={<End />} />
          <Route path="/survey/uninterested" element={<Uninterested />} />
          <Route path="/survey/confirmation" element={<Confirmation />} />
        </Routes>
      </SurveyProvider>
    </Router>
  );
}

export default App;