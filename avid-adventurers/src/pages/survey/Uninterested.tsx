import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from '../../components/Label/Label';
import { Container, FormWrapper, ButtonRow, BackButton, ContinueButton } from '../styles';
import { LabeledInput } from '../../components/LabeledInput/LabeledInput';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { useSurvey } from '../../utils/surveyContext';

const Uninterested: React.FC = () => {
    const navigate = useNavigate();
    const { experience, setExperience } = useSurvey();

    const handleContinue = () => {
      navigate('/survey/confirmation');
    };

    const handleBack = () => {
      navigate('/survey/rated');
    }

    return (
    <Container>
      <FormWrapper>
        <div style={{ width: '350px', marginBottom: '1.5rem' }}>
          <Label
            label = {"We're sorry to hear\nthe bad news!"}
            multiline = {true}
            />
        </div>
        <LabeledInput
          label="Tell us what went wrong."
          placeholder="Type your thoughts here..."
          value={experience}
          multiline={true}
          onChange={(e) => setExperience(e.target.value)}
        />
        <ProgressBar totalSteps={3} currentStep={2} />
        <ButtonRow style={{ maxWidth: '350px' }}>
          <BackButton onClick={handleBack}>Back</BackButton> 
          <ContinueButton onClick={handleContinue}>Continue</ContinueButton>
        </ButtonRow>
      </FormWrapper>
    </Container>
    );
  };
  
  export default Uninterested;