import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from '../../components/Label/Label';
import { Container, FormWrapper, ButtonRow, ContinueButton } from '../styles';
import { useSurvey } from '../../utils/surveyContext';


const Rated: React.FC = () => {
    const navigate = useNavigate();
    const { friendProfileImage, friendName, friendInterests, activity, interests, rating, setRating, updateInterests, setProfileImage } = useSurvey();

    const handleYes = () => {
      navigate('/survey/help');
    };

    const handleNo = () => {
        navigate('/survey/uninterested');
      };

    return (
    <Container>
    <FormWrapper>
        <Label
                label={`Would you be interested in seeing ${friendName} again?`}
                multiline = {true}
                >
            <ButtonRow style={{ marginBottom: '15px' }}> 
                <ContinueButton onClick={handleYes}>Yes</ContinueButton>
                <ContinueButton onClick={handleNo}>No</ContinueButton>
            </ButtonRow>
        </Label>
    </FormWrapper>
    </Container>
)};

export default Rated;