import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FormWrapper, ButtonRow, BackButton, ContinueButton } from '../styles';
import { useSurvey } from '../../utils/surveyContext';
import { LabeledInput } from '../../components/LabeledInput/LabeledInput';


const Uninterested: React.FC = () => {
    const navigate = useNavigate();
    const { experience, setExperience } = useSurvey();

    useEffect(() => {
      setExperience('');
    }, []);

    const handleContinue = () => {
      navigate('/survey/confirmation');
    };

    const handleBack = () => {
      navigate('/survey/rated');
    }

    return (
    <Container>
      <FormWrapper>
        <LabeledInput
          label="Tell us what went wrong."
          placeholder="Type your thoughts here..."
          value={experience}
          multiline={true}
          onChange={(e) => setExperience(e.target.value)}
        />
        <ButtonRow>
          <BackButton onClick={handleBack}>Back</BackButton> 
          <ContinueButton onClick={handleContinue}>Continue</ContinueButton>
        </ButtonRow>
      </FormWrapper>
    </Container>
    );
  };
  
  export default Uninterested;