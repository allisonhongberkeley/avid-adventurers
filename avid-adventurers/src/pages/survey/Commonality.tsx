import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from '../../components/Label/Label';
import { Container, FormWrapper, ButtonRow, ContinueButton } from '../styles';
import { useSurvey } from '../../utils/surveyContext';


const Commonality: React.FC = () => {
    const navigate = useNavigate();
    const { friendProfileImage, friendName, friendInterests, activity, interests, rating, setRating, updateInterests, setProfileImage } = useSurvey();

    const handleContinue = () => {
      navigate('/survey/end');
    };

    return (
    <Container>
    <FormWrapper>
        <Label
                label={`Here are ${friendName}'s other interests. Select all that interest you:`}
                multiline = {true}
                />
        <ButtonRow> 
            <ContinueButton onClick={handleContinue}>Continue</ContinueButton>
        </ButtonRow>
    </FormWrapper>
    </Container>
)};

export default Commonality;