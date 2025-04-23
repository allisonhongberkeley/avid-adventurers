import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/onboarding/Profile';
import Age from './pages/onboarding/Age';
import Interests from './pages/onboarding/Interests';
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
import Events from './pages/onboarding/Events';

import TempHome from "./pages/TempHome";
import TempBucket from "./pages/TempBucket";
import TempChat from "./pages/TempChat";
import TempProfile from "./pages/TempProfile";
import { SurveyProvider } from './utils/surveyContext';


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