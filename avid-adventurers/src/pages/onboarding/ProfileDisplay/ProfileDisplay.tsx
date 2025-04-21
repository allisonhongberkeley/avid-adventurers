import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileImage } from '../../../components/ProfileImage/ProfileImage'; // Use the modified ProfileImage
import { Container, FormWrapper } from '../../styles'; // Adjusted path
import { useOnboarding } from '../../../utils/onboardingContext'; // Adjusted path
// Import styles from the new local file
import {
    WelcomeTitle,
    UserName,
    LocationText,
    InterestsList,
    InterestTag,
    GetStartedButton
} from './ProfileDisplayStyles';

const ProfileDisplay: React.FC = () => {
    const navigate = useNavigate();
    // Get only needed props. setProfileImage is not needed for readOnly mode.
    const { firstName, city, profileImage } = useOnboarding();

    const handleGetStarted = () => {
        navigate('/dashboard');
    };

    return (
    <Container>
      <FormWrapper>
        <WelcomeTitle>Welcome to Meetropolis, {firstName}!</WelcomeTitle>

        {/* Use the modified ProfileImage in readOnly mode */}
        <ProfileImage
          profileImage={profileImage}
          readOnly={true} // Set to readOnly
        />

        <UserName>{firstName}</UserName>
        <LocationText>
          <span>📍</span> {city}
        </LocationText>

        <InterestsList>
          <InterestTag>🏄 paddleboarding</InterestTag>
          <InterestTag>🛹 skateboarding</InterestTag>
          <InterestTag>⛵ sailing</InterestTag>
          <InterestTag>🏔 hiking</InterestTag>
          <InterestTag>☕ coffee</InterestTag>
          <InterestTag>🍷 wine tasting</InterestTag>
          <InterestTag>🎵 concerts</InterestTag>
        </InterestsList>

        <GetStartedButton onClick={handleGetStarted}>
          Get Started!
        </GetStartedButton>
      </FormWrapper>
    </Container>
)};

export default ProfileDisplay; 