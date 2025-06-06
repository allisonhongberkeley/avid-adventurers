import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Label } from '../../components/Label/Label';
import { Container, FormWrapper, ButtonRow, ContinueButton, BackButton } from '../styles';
import { useSurvey } from '../../utils/surveyContext';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const End: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedTags: string[] = location.state?.selectedTags || [];
    const { friendName } = useSurvey();
    const previousPage = (location.state as { from?: string })?.from || '/survey/interested';
    const handleDone = () => {
        const filteredTags = selectedTags.filter(tag => tag !== 'skateboarding').map(tag => {
            if (tag === 'football') return 'playing football';
            if (tag === 'pickleball') return 'playing pickleball';
            return tag;
        });
        navigate('/chat/survey-results', {
            state: { selectedTags: filteredTags },
        });
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
        </Label>
        <ProgressBar totalSteps={3} currentStep={3} />
        <ButtonRow style={{ maxWidth: '350px' }}> 
            <BackButton onClick={handleBack}>Back</BackButton>
            <ContinueButton onClick={handleDone}>
            Done
        </ContinueButton>
        </ButtonRow>
    </FormWrapper>
    </Container>
)};

export default End;