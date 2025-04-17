import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/onboarding/Profile';
import Age from './pages/onboarding/Age';
import Interests from './pages/onboarding/Interests';
import { OnboardingProvider } from './utils/onboardingContext';

import TempHome from "./pages/onboarding/TempHome";
import TempBucket from "./pages/onboarding/TempBucket";
import TempChat from "./pages/onboarding/TempChat";
import TempProfile from "./pages/onboarding/TempProfile";

function App() {
  return (
    <Router>
      <OnboardingProvider>
        <Routes>
          <Route path="/onboarding/profile" element={<Profile />} />
          <Route path="/onboarding/age" element={<Age />} />
          <Route path="/onboarding/interests" element={<Interests />} />
          <Route path="/onboarding/tempHome" element={<TempHome />} />
          <Route path="/onboarding/tempBucket" element={<TempBucket />} />
          <Route path="/onboarding/tempChat" element={<TempChat />} />
          <Route path="/onboarding/tempProfile" element={<TempProfile />} />
        </Routes>
      </OnboardingProvider>
    </Router>
  );
}

export default App;