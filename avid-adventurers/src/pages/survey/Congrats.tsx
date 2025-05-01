import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from '../../components/Label/Label';
import { BackgroundWrapper, Container, FormWrapper, ButtonRow, ContinueButton, BackButton, PhoneContainer } from '../styles';
import { useSurvey } from '../../utils/surveyContext';


const Congrats: React.FC = () => {
    const navigate = useNavigate();
    const { friendProfileImage, friendName, friendInterests, activity, interests, rating, setRating, updateInterests, setProfileImage } = useSurvey();

    const handleContinue = () => {
      navigate('/survey/rate');
    };

    const handleBack = () => {
        navigate('/home');
    }

    return (
    <BackgroundWrapper>
        <PhoneContainer>
        <Container>
        <FormWrapper>
            <Label
                    label={`You met ${friendName} for ${activity}!`}
                    multiline = {true}
                    image = {friendProfileImage}
                    >
            <ButtonRow style={{ width: '300px', margin: '0 auto', marginBottom: '25px' }}> 
                <ContinueButton onClick={handleContinue}>Continue</ContinueButton>
            </ButtonRow>
            </Label>
            <ButtonRow style={{ maxWidth: '350px' }}>
                <BackButton onClick={handleBack}>Skip</BackButton> 
            </ButtonRow>
        </FormWrapper>
        </Container>
        </PhoneContainer>
    </BackgroundWrapper>
)};

export default Congrats;