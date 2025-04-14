import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileImage} from '../../components/ProfileImage/ProfileImage';
import { LabeledInput } from '../../components/LabeledInput/LabeledInput';
import { Container, Title, FormWrapper, ProfileImageWrapper, ProfileImageInput, PlaceholderText, ProfileImagePreview, FallbackText, Button } from '../styles';
import { useOnboarding } from '../../utils/onboardingContext';


const Age: React.FC = () => {
    const navigate = useNavigate();
    const { age, setAge, pronouns, setPronouns, funFact, setFunFact, profileImage, setProfileImage } = useOnboarding();


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

        <Button onClick={handleContinue}>Continue</Button>
      </FormWrapper>
    </Container>
)};

export default Age;