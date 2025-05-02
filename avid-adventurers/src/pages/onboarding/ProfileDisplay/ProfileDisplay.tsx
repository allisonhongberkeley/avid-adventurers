import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileImage } from '../../../components/ProfileImage/ProfileImage'; 
import { ButtonRow, BackButton, ContinueButton, Container, FormWrapper } from '../../styles'; 
import { interestIcons } from '../../../utils/Interests';
import { useOnboarding } from '../../../utils/onboardingContext'; 
import ProgressBar from '../../../components/ProgressBar/ProgressBar';

import {
    WelcomeTitle,
    UserName,
    LocationText,
} from './styles';

import { InterestsList, InterestTag } from '../../styles';

const ProfileDisplay: React.FC = () => {
    const navigate = useNavigate();
    const { firstName, city, profileImage, interests } = useOnboarding();

    const handleContinue = () => {
        navigate('/home');
    };

    const handleBack = () => {
      navigate('/onboarding/interests');
    }

    return (
    <Container>
      <FormWrapper>
        <WelcomeTitle>Welcome to Meetropolis, {firstName}!</WelcomeTitle>

        <ProfileImage
          profileImage={profileImage}
          readOnly={true} 
        />

        <UserName>{firstName}</UserName>
        <LocationText>
          <span>📍</span> {city}
        </LocationText>
        <InterestsList>
          {interests.map((interest) => (
            <InterestTag key={interest}>
              {interestIcons[interest] ?? ''} {interest}
            </InterestTag>
          ))}
        </InterestsList>

        <ProgressBar totalSteps={3} currentStep={3} />
        <ButtonRow>
          <BackButton onClick={handleBack}>Back</BackButton>
          <ContinueButton onClick={handleContinue}>Continue</ContinueButton>
        </ButtonRow>
      </FormWrapper>
    </Container>
)};

export default ProfileDisplay; 