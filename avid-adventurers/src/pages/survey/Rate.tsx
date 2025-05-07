import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from '../../components/Label/Label';
import Rating from '../../components/Rating/Rating';
import { Container, FormWrapper, ButtonRow, BackButton, ContinueButton } from '../styles';
import { useSurvey } from '../../utils/surveyContext';
import { LabeledInput } from '../../components/LabeledInput/LabeledInput';
import ProgressBar from '../../components/ProgressBar/ProgressBar';


const Rate: React.FC = () => {
    const navigate = useNavigate();
    const { rating, setRating, ratingExperience, setRatingExperience } = useSurvey();

    const handleContinue = () => {
      navigate('/survey/rated');
    };

    const handleBack = () => {
      navigate('/survey/congrats');
    }

    return (
    <Container>
      <FormWrapper>
        <Label
          label = "How did you like the experience?"
        />
        <Rating initialRating={rating} onRatingChange={setRating} />
        <LabeledInput
          label="Why?"
          placeholder="Type your thoughts here..."
          value={ratingExperience}
          multiline={true}
          onChange={(e) => setRatingExperience(e.target.value)}
        />
        <ProgressBar totalSteps={3} currentStep={1} />
        <ButtonRow style={{ maxWidth: '350px' }}>
          <BackButton onClick={handleBack}>Back</BackButton> 
          <ContinueButton onClick={handleContinue}>Continue</ContinueButton>
        </ButtonRow>
      </FormWrapper>
    </Container>
    );
  };
  
  export default Rate;