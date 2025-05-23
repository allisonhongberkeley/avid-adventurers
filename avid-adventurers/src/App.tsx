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
import Events from './pages/Home';
import Chat from './pages/ChatPage/ChatPage';
import SurveyResults from './pages/ChatPage/SurveyResults';
import ChatInbox from './pages/ChatInbox/ChatInbox';
import Bucket from './pages/Bucket';
import EventDetails from './pages/events/EventDetails';
import Upcoming from './pages/calendar/upcoming';
import Add from './pages/calendar/add';
import Edit from './pages/calendar/edit';
import ProfileCard from './components/ProfileCard/ProfileCard';
import EventUserDetails from './pages/Users/EventUserDetails';
import HomeUserDetails from './pages/Users/HomeUserDetails';
import ProfileView from './pages/ProfileView';

import { OnboardingProvider } from './utils/onboardingContext';
import { BucketlistProvider } from './utils/bucketlistContext';
import { SurveyProvider } from './utils/surveyContext';

function App() {
  return (
    <Router>
      <OnboardingProvider>
        <BucketlistProvider>
          <SurveyProvider>
            <Routes>
              {/* Onboarding */}
              <Route path="/onboarding/profile" element={<Profile />} />
              <Route path="/onboarding/age" element={<Age />} />
              <Route path="/onboarding/interests" element={<Interests />} />
              <Route path="/onboarding/profileDisplay" element={<ProfileDisplay />} />

              {/* Survey */}
              <Route path="/survey/congrats" element={<Congrats />} />
              <Route path="/survey/rate" element={<Rate />} />
              <Route path="/survey/rated" element={<Rated />} />
              <Route path="/survey/help" element={<Help />} />
              <Route path="/survey/interested" element={<Interested />} />
              <Route path="/survey/commonality" element={<Commonality />} />
              <Route path="/survey/end" element={<End />} />
              <Route path="/survey/uninterested" element={<Uninterested />} />
              <Route path="/survey/confirmation" element={<Confirmation />} />

              {/* Main app */}
              <Route path="/home" element={<Events />} />
              <Route path="/events/:eventSlug" element={<EventDetails />} />
              <Route path="/events/:eventSlug/people/:userSlug" element={<EventUserDetails />} />
              <Route path="/bucket/:eventSlug" element={<EventDetails />} />
              <Route path="/people/:userSlug" element={<HomeUserDetails />} />
              <Route path="/profileCard" element={<ProfileCard />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/chat/survey-results" element={<SurveyResults />} />
              <Route path="/inbox" element={<ChatInbox />} />
              <Route path="/bucket" element={<Bucket />} />
              <Route path="/profileview" element={<ProfileView />} />
              <Route path="/calendar/upcoming" element={<Upcoming />} />
              <Route path="/calendar/add" element={<Add />} />
              <Route path="/calendar/edit" element={<Edit />} />
            </Routes>
          </SurveyProvider>
        </BucketlistProvider>
      </OnboardingProvider>
    </Router>
  );
}

export default App;