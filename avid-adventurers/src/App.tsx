import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/onboarding/Profile';
import Age from './pages/onboarding/Age';
import Interests from './pages/onboarding/Interests';
import Congrats from './pages/survey/Congrats';
import Rate from './pages/survey/Rate';
import { OnboardingProvider } from './utils/onboardingContext';
import Events from './pages/onboarding/Events';

import TempHome from "./pages/TempHome";
import TempBucket from "./pages/TempBucket";
import TempChat from "./pages/TempChat";
import TempProfile from "./pages/TempProfile";
import { SurveyProvider } from './utils/surveyContext';

import ProfileDisplay from './pages/onboarding/ProfileDisplay/ProfileDisplay';
import ChatPage from './pages/onboarding/ChatPage/ChatPage';

function App() {
  return (
    <Router>
      <OnboardingProvider>
        <Routes>
          <Route path="/onboarding/profile" element={<Profile />} />
          <Route path="/onboarding/age" element={<Age />} />
          <Route path="/onboarding/interests" element={<Interests />} />
          <Route path="/tempHome" element={<TempHome />} />
          <Route path="/tempBucket" element={<TempBucket />} />
          <Route path="/tempChat" element={<TempChat />} />
          <Route path="/tempProfile" element={<TempProfile />} />
          <Route path="/events" element={<Events />} />
          <Route path="/onboarding/profileDisplay" element={<ProfileDisplay />} />
          <Route path="/onboarding/chat" element={<ChatPage />} />
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