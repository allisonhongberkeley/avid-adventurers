import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from '../../components/Label/Label';
import { BackgroundWrapper, Container, FormWrapper, ButtonRow, ContinueButton } from '../styles';
import { useSurvey } from '../../utils/surveyContext';


const Congrats: React.FC = () => {
    const navigate = useNavigate();
    const { friendProfileImage, friendName, friendInterests, activity, interests, rating, setRating, updateInterests, setProfileImage } = useSurvey();

    const handleContinue = () => {
      navigate('/survey/rate');
    };

    return (
    <BackgroundWrapper>
        <Container>
        <FormWrapper>
            <Label
                    label={`You met ${friendName} for ${activity}!`}
                    multiline = {true}
                    image = {friendProfileImage}
                    />
            <ButtonRow> 
                <ContinueButton onClick={handleContinue}>Continue</ContinueButton>
            </ButtonRow>
        </FormWrapper>
        </Container>
    </BackgroundWrapper>
)};

export default Congrats;