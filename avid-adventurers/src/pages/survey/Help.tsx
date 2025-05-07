import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Label } from '../../components/Label/Label';
import { Container, FormWrapper, ButtonRow, ContinueButton, BackButton } from '../styles';
import { useSurvey } from '../../utils/surveyContext';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const Help: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { friendName } = useSurvey();

    const handleYes = () => {
      navigate('/survey/interested');
    };

    const handleNo = () => {
        navigate('/survey/end', { state: { from: location.pathname } });
      };

    const handleBack = () => {
        navigate('/survey/rated');
    }

    return (
    <Container>
    <FormWrapper>
        <Label
                label={`Would you like help setting up plans with ${friendName}?`}
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

export default Help;