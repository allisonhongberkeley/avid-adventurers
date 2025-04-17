import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from '../../components/Label/Label';
import Rating from '../../components/Rating/Rating';
import { Container, Title, FormWrapper, ButtonRow, BackButton, ContinueButton } from '../styles';
import { useSurvey } from '../../utils/surveyContext';
import { LabeledInput } from '../../components/LabeledInput/LabeledInput';


const Rate: React.FC = () => {
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [experience, setExperience] = useState('');

    useEffect(() => {
      const savedRating = localStorage.getItem('rating');
      const savedExperience = localStorage.getItem('experience');
      
      if (savedRating) {
        setRating(Number(savedRating));
      }
      
      if (savedExperience) {
        setExperience(savedExperience); 
      }
    }, []);

    useEffect(() => {
      if (rating) {
        localStorage.setItem('rating', rating.toString()); 
      }
    }, [rating]); 

    useEffect(() => {
      if (experience) {
        localStorage.setItem('experience', experience); 
      }
    }, [experience]);

    const handleContinue = () => {
      navigate('/survey/rated');
    };

    const handleBack = () => {
      navigate('/survey/congrats');
    }

    const handleRatingChange = (newRating: number) => {
      setRating(newRating); // Update the rating state when the user clicks a star
    };

    return (
    <Container>
      <FormWrapper>
        <Label
          label = "How did you like the experience?"
        />
        {/* Rating component */}
        <Rating initialRating={rating} onRatingChange={handleRatingChange} />
        <LabeledInput
          label="Why?"
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
  
  export default Rate;