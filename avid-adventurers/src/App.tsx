import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/onboarding/Profile';
import Age from './pages/onboarding/Age';
import Interests from './pages/onboarding/Interests';
import { OnboardingProvider } from './utils/onboardingContext';
import Events from './pages/onboarding/Events';

function App() {
  return (
    <Router>
      <OnboardingProvider>
        <Routes>
          <Route path="/onboarding/profile" element={<Profile />} />
          <Route path="/onboarding/age" element={<Age />} />
          <Route path="/onboarding/interests" element={<Interests />} />
          <Route path="/onboarding/events" element={<Events />} />
        </Routes>
      </OnboardingProvider>
    </Router>
  );
}

export default App;