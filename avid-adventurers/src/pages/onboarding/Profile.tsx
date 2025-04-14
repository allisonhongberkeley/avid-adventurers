import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileImage} from '../../components/ProfileImage/ProfileImage';
import { LabeledInput } from '../../components/LabeledInput/LabeledInput';
import { Container, Title, FormWrapper, ProfileImageWrapper, ProfileImageInput, PlaceholderText, ProfileImagePreview, FallbackText, Button } from '../styles';
import { useOnboarding } from '../../utils/onboardingContext';

const Profile: React.FC = () => {
    const navigate = useNavigate();
    const { profileImage, setProfileImage, firstName, setFirstName, city, setCity } = useOnboarding();

    const handleContinue = () => {
      navigate('/onboarding/age');
    };

    return (
    <Container>
      <Title>Set up your profile</Title>

      <FormWrapper>
      <ProfileImage
          profileImage={profileImage}
          setProfileImage={setProfileImage}
      />
      <LabeledInput
        label="Please enter your first name:"
        placeholder="Jane"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <LabeledInput
        label="Please enter the city you live in:"
        placeholder="San Francisco"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <Button onClick={handleContinue}>Continue</Button>
      </FormWrapper>
    </Container>
)};

export default Profile;