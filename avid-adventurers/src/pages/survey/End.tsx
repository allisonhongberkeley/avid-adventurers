import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Label } from '../../components/Label/Label';
import { Container, FormWrapper, ButtonRow, ContinueButton, BackButton } from '../styles';
import { useSurvey } from '../../utils/surveyContext';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const End: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { friendProfileImage, friendName, friendInterests, activity, interests, rating, setRating, updateInterests, setProfileImage } = useSurvey();
    const previousPage = (location.state as { from?: string })?.from || '/survey/interested';
    const handleDone = () => {
      navigate('/home');
    };

    const handleBack = () => {
        navigate(previousPage);
    }

    return (
    <Container>
    <FormWrapper>
        <Label
                label={`We will update you when we hear back\nfrom ${friendName}!\n\nUntil then, kick back and relax.`}
                multiline = {true}
                >
        <ContinueButton style={{ width: '300px', margin: '0 auto', marginBottom: '25px' }} onClick={handleDone}>
            Done
        </ContinueButton>
        </Label>
        <ProgressBar totalSteps={3} currentStep={3} />
        <ButtonRow style={{ maxWidth: '350px' }}> 
            <BackButton onClick={handleBack}>Back</BackButton>
        </ButtonRow>
    </FormWrapper>
    </Container>
)};

export default End;