import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from '../../components/Label/Label';
import { Container, FormWrapper, ButtonRow, ContinueButton, BackButton } from '../styles';
import { useSurvey } from '../../utils/surveyContext';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const Confirmation: React.FC = () => {
    const navigate = useNavigate();
    const { friendProfileImage, friendName, friendInterests, activity, interests, rating, setRating, updateInterests, setProfileImage } = useSurvey();

    const handleDone = () => {
      navigate('/home');
    };

    const handleBack = () => {
        navigate('/survey/uninterested');
    }
    

    return (
    <Container>
    <FormWrapper>
        <Label
                label={`We have updated\nyour preferences to\nimprove future\nmatches.\n\nCheck back soon to meet a new friend!`}
                multiline = {true}
                image = {friendProfileImage}
                >
        <ButtonRow style={{ width: '300px', margin: '0 auto', marginBottom: '25px' }}> 
            <ContinueButton onClick={handleDone}>Done</ContinueButton>
        </ButtonRow>
        </Label>
        <ProgressBar totalSteps={3} currentStep={3} />
        <ButtonRow style={{ maxWidth: '350px' }}> 
            <BackButton onClick={handleBack}>Back</BackButton>
        </ButtonRow>
    </FormWrapper>
    </Container>
)};

export default Confirmation;