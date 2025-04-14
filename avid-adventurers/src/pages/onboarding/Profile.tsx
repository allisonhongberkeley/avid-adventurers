import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LabeledInput } from '../../components/LabeledInput/LabeledInput';
import { Container, Title, FormWrapper, ProfileImageWrapper, ProfileImageInput, PlaceholderText, ProfileImagePreview, FallbackText, Button } from '../styles';
import { useOnboarding } from '../../utils/onboardingContext';


const Profile: React.FC = () => {
    const navigate = useNavigate();
    const [imageError, setImageError] = useState(false);
    const { profileImage, setProfileImage, firstName, setFirstName, city, setCity } = useOnboarding();

    const handleContinue = () => {
      navigate('/onboarding/age');
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.files);
      if (e.target.files && e.target.files[0]) {
        setProfileImage(e.target.files[0]);
        setImageError(false); 
      }
    };

    return (
    <Container>
      <Title>Set up your profile</Title>

      <FormWrapper>
      <ProfileImageWrapper>
        <ProfileImageInput type="file" accept="image/*" onChange={handleImageChange} />
        {profileImage ? (
          <>
          <ProfileImagePreview 
            src={URL.createObjectURL(profileImage)} 
            onError={() => setImageError(true)}
          />
          {imageError && <FallbackText>Image failed to load</FallbackText>}
          </>
        ) : (
          <PlaceholderText>Upload Image</PlaceholderText>
        )}
      </ProfileImageWrapper>


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