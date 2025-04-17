import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileImage} from '../../components/ProfileImage/ProfileImage';
import { LabeledInput } from '../../components/LabeledInput/LabeledInput';
import { Container, Title, FormWrapper, ButtonRow, BackButton, ContinueButton } from '../styles';
import { useOnboarding } from '../../utils/onboardingContext';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const Profile: React.FC = () => {
    const navigate = useNavigate();
    const { profileImage, setProfileImage, firstName, setFirstName, city, setCity } = useOnboarding();

    const handleContinue = () => {
      navigate('/onboarding/age');
    };

    const handleBack = () => {
      navigate('/');
    }

    return (
    <Container>
      <FormWrapper>
        <Title>Set up your profile</Title>
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
        <ProgressBar totalSteps={3} currentStep={1} />
        <ButtonRow>
          <BackButton onClick={handleBack}>Back</BackButton>
          <ContinueButton onClick={handleContinue}>Continue</ContinueButton>
        </ButtonRow>
      </FormWrapper>
    </Container>
)};

export default Profile;