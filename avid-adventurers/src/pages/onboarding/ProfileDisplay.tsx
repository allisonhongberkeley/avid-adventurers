import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DisplayOnlyProfileImage } from '../../components/ProfileImage/DisplayOnlyProfileImage';
import { Container, FormWrapper } from '../styles';
import { useOnboarding } from '../../utils/onboardingContext';
import styled from 'styled-components';

const WelcomeTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const UserName = styled.h2`
  font-size: 1.25rem;
  margin: 1rem 0;
`;

const LocationText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const InterestsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const InterestTag = styled.div`
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const GetStartedButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

const ProfileDisplay: React.FC = () => {
    const navigate = useNavigate();
    const { firstName, city, profileImage } = useOnboarding();

    const handleGetStarted = () => {
        navigate('/dashboard');
    };

    return (
    <Container>
      <FormWrapper>
        <WelcomeTitle>Welcome to Meetropolis, {firstName}!</WelcomeTitle>

        <DisplayOnlyProfileImage profileImage={profileImage} />

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