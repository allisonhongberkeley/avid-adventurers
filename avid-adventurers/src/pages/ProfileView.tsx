import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../utils/onboardingContext';
import { interestIcons } from '../utils/Interests';

import {
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
  Container,
} from './styles';

import { NavBar } from '../components/NavBar/NavBar';
import { ExitLink } from '../components/ExitLink/ExitLink';
import { InterestsList, InterestTag } from './styles';
import ProgressBar from '../components/ProgressBar/ProgressBar';

const ProfileView: React.FC = () => {
  const navigate = useNavigate();
  const { firstName, city, profileImage, interests, age, pronouns } = useOnboarding();

  const handleClick = () => {
    navigate('/onboarding/profile');
  };

  return (
    <Container>
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


      <Button onClick={handleClick}>Edit Profile</Button>
      </Card>
      <NavBar />
    </Container>
  );
};

export default ProfileView;
