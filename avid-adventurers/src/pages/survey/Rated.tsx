import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from '../../components/Label/Label';
import { Container, FormWrapper, ButtonRow, BackButton, ContinueButton } from '../styles';
import { useSurvey } from '../../utils/surveyContext';
import ProgressBar from '../../components/ProgressBar/ProgressBar';


const Rated: React.FC = () => {
    const navigate = useNavigate();
    const { friendProfileImage, friendName, friendInterests, activity, interests, rating, setRating, updateInterests, setProfileImage } = useSurvey();

    const handleYes = () => {
      navigate('/survey/help');
    };

    const handleNo = () => {
        navigate('/survey/uninterested');
      };

    const handleBack = () => {
        navigate('/survey/rate');
    }

    return (
    <Container>
    <FormWrapper>
        <Label
                label={`Would you be interested in seeing ${friendName} again?`}
                multiline = {true}
                >
            <ButtonRow style={{ margin: '0 auto', maxWidth: '300px', marginBottom: '25px' }}> 
                <ContinueButton onClick={handleYes}>Yes</ContinueButton>
                <ContinueButton onClick={handleNo}>No</ContinueButton>
            </ButtonRow>
        </Label>
        <ProgressBar totalSteps={3} currentStep={2} />
        <ButtonRow style={{ maxWidth: '350px' }}>
            <BackButton onClick={handleBack}>Back</BackButton> 
        </ButtonRow>
    </FormWrapper>
    </Container>
)};

export default Rated;