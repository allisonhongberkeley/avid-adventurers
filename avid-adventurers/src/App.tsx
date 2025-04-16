import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/onboarding/Profile';
import Age from './pages/onboarding/Age';
import { OnboardingProvider } from './utils/onboardingContext';
import ProfileDisplay from './pages/onboarding/ProfileDisplay';

function App() {
  return (
    <Router>
      <OnboardingProvider>
        <Routes>
          <Route path="/onboarding/profile" element={<Profile />} />
          <Route path="/onboarding/age" element={<Age />} />
          <Route path="/onboarding/profileDisplay" element={<ProfileDisplay />} />
        </Routes>
      </OnboardingProvider>
    </Router>
  );
}

export default App;