import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from '../../components/Label/Label';
import { Container, FormWrapper, ButtonRow, ContinueButton } from '../styles';
import { useSurvey } from '../../utils/surveyContext';


const Confirmation: React.FC = () => {
    const navigate = useNavigate();
    const { friendProfileImage, friendName, friendInterests, activity, interests, rating, setRating, updateInterests, setProfileImage } = useSurvey();

    const handleDone = () => {
      navigate('/temphome');
    };

    return (
    <Container>
    <FormWrapper>
        <Label
                label={`We've updated your preferences to improve future matches. Check back soon to meet a new friend!`}
                multiline = {true}
                image = {friendProfileImage}
                />
        <ButtonRow> 
            <ContinueButton onClick={handleDone}>Done</ContinueButton>
        </ButtonRow>
    </FormWrapper>
    </Container>
)};

export default Confirmation;