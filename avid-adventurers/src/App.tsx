import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/onboarding/Profile';
import Age from './pages/onboarding/Age';
import Interests from './pages/onboarding/Interests';
import ProfileDisplay from './pages/onboarding/ProfileDisplay/ProfileDisplay';
import Congrats from './pages/survey/Congrats';
import Rate from './pages/survey/Rate';
import { OnboardingProvider } from './utils/onboardingContext';
import Events from './pages/Home';

import TempBucket from "./pages/TempBucket";
import TempChat from "./pages/TempChat";
import TempProfile from "./pages/TempProfile";
import { SurveyProvider } from './utils/surveyContext';

import Sunset from "./pages/events/Sunset";
import Yoga from "./pages/events/Yoga";
import Arizmendi from "./pages/events/Arizmendi";
import Sail from "./pages/events/Sail";


function App() {
  return (
    <Router>
      <OnboardingProvider>
        <Routes>
          <Route path="/onboarding/profile" element={<Profile />} />
          <Route path="/onboarding/age" element={<Age />} />
          <Route path="/onboarding/interests" element={<Interests />} />
          <Route path="/onboarding/profileDisplay" element={<ProfileDisplay />} />
          <Route path="/tempBucket" element={<TempBucket />} />
          <Route path="/tempChat" element={<TempChat />} />
          <Route path="/tempProfile" element={<TempProfile />} />
          <Route path="/home" element={<Events />} />
          <Route path="/events/sunset" element={<Sunset />} />
          <Route path="/events/yoga" element={<Yoga />} />
          <Route path="/events/arizmendi" element={<Arizmendi />} />
          <Route path="/events/sail" element={<Sail />} />          
        </Routes>
      </OnboardingProvider>
      <SurveyProvider>
        <Routes>
          <Route path="/survey/congrats" element={<Congrats />} />
          <Route path="/survey/rate" element={<Rate />} />
        </Routes>
      </SurveyProvider>
    </Router>
  );
}

export default App;