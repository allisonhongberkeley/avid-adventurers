import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../../utils/onboardingContext';
import { interestIcons } from '../../../utils/Interests';

import {
  PageWrapper,
  Card,
  Title,
  Avatar,
  ProfileInfo,
  Location,
  ButtonGroup,
  Button,
  Name,
  AvatarDiv,
  ProfileText,
} from './styles';

import { ExitLink } from '../../../components/ExitLink/ExitLink';
import { InterestsList, InterestTag } from '../../styles';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';

const ProfileDisplay: React.FC = () => {
  const navigate = useNavigate();
  const { firstName, city, profileImage, interests, age, pronouns } = useOnboarding();

  const handleContinue = () => {
    navigate('/home');
  };

  const handleBack = () => {
    navigate('/onboarding/interests');
  };

  return (
    <PageWrapper>
      <Card>
        <Title>Welcome to Meetropolis, {firstName}!</Title>

        <AvatarDiv>
        <Avatar
          src={
          profileImage
          ? typeof profileImage === 'string'
          ? profileImage
          : URL.createObjectURL(profileImage)
          : '/profile.png'
        }
        alt={`${firstName}'s avatar`}
        />
        </AvatarDiv>

        <ProfileInfo>
          <Name>{firstName}, {age}</Name>
          <ProfileText>({pronouns})</ProfileText>
          <ProfileText>📍 {city}</ProfileText>
        </ProfileInfo>

        <InterestsList>
          {interests.map((interest) => (
            <InterestTag key={interest}>
              {interestIcons[interest] ?? ''} {interest}
            </InterestTag>
          ))}
        </InterestsList>

        <ProgressBar totalSteps={3} currentStep={3} />

        <ButtonGroup>
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handleContinue}>Continue</Button>
        </ButtonGroup>
      </Card>
    </PageWrapper>
  );
};

export default ProfileDisplay;
