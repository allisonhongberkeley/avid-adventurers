import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from '../../components/Label/Label';
import { Container, FormWrapper, ButtonRow, ContinueButton } from '../styles';
import { useSurvey } from '../../utils/surveyContext';


const End: React.FC = () => {
    const navigate = useNavigate();
    const { friendProfileImage, friendName, friendInterests, activity, interests, rating, setRating, updateInterests, setProfileImage } = useSurvey();

    const handleDone = () => {
      navigate('/temphome');
    };

    return (
    <Container>
    <FormWrapper>
        <Label
                label={`We will update you when we hear back from ${friendName}! Until then, kick back and relax.`}
                multiline = {true}
                />
        <ButtonRow> 
            <ContinueButton onClick={handleDone}>Done</ContinueButton>
        </ButtonRow>
    </FormWrapper>
    </Container>
)};

export default End;