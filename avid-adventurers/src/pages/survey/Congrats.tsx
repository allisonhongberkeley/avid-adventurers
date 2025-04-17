import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from '../../components/Label/Label';
import { Container, Title, FormWrapper, ButtonRow, BackButton, ContinueButton } from '../styles';
import { useSurvey } from '../../utils/surveyContext';


const Congrats: React.FC = () => {
    const navigate = useNavigate();
    const { friendProfileImage, friendName, friendInterests, activity, interests, rating, setRating, updateInterests, setProfileImage } = useSurvey();

    const handleContinue = () => {
      navigate('/survey/rate');
    };

    const pageStyle = {
        backgroundImage: "url('https://cdn.pixabay.com/animation/2024/05/02/07/43/07-43-00-535_512.gif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat !important',
        height: '100vh', 
        zIndex: '-1',
    };

    return (
    <div style={pageStyle}>
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
    </div>
)};

export default Congrats;