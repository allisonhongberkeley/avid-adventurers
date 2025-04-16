import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileImage} from '../../components/ProfileImage/ProfileImage';
import { LabeledInput } from '../../components/LabeledInput/LabeledInput';
import { Container, Title, FormWrapper, ButtonRow, BackButton, ContinueButton } from '../styles';
import { useOnboarding } from '../../utils/onboardingContext';


const Age: React.FC = () => {
    const navigate = useNavigate();
    const { age, setAge, pronouns, setPronouns, funFact, setFunFact, profileImage, setProfileImage } = useOnboarding();

    const handleContinue = () => {
      navigate('/onboarding/interests');
    };

    const handleBack = () => {
      navigate('/onboarding/profile');
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
          label="Please enter your age:"
          placeholder="23"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <LabeledInput
          label="Please enter your preferred pronouns:"
          placeholder="she/her"
          value={pronouns}
          onChange={(e) => setPronouns(e.target.value)}
        />
        <LabeledInput
          multiline
          label="Please enter a fun fact about yourself:"
          value={funFact}
          onChange={(e) => setFunFact(e.target.value)}
        />
        <ButtonRow>
          <BackButton onClick={handleBack}>Back</BackButton>
          <ContinueButton onClick={handleContinue}>Continue</ContinueButton>
        </ButtonRow>
      </FormWrapper>
    </Container>
)};

export default Age;