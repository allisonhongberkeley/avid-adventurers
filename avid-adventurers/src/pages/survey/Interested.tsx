import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Label } from '../../components/Label/Label';
import { Container, FormWrapper, ButtonRow, ContinueButton, BackButton } from '../styles';
import { useSurvey } from '../../utils/surveyContext';
import { DropdownSelect } from '../../components/DropdownSelect/DropdownSelect';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const capFirst = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

const Interested: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { friendProfileImage, friendName, friendInterests, activity, interests, rating, setRating, updateInterests, setProfileImage } = useSurvey();

    const [selected, setSelected] = useState("Try Something New");

    const handleContinue = () => {
        if (selected === "Try Something New") {
            navigate('/survey/commonality');
        } else {
            navigate('/survey/end', { state: { from: location.pathname } });
        }
    }

    const handleBack = () => {
        navigate('/survey/help');
    }

    return (
    <Container>
    <FormWrapper>
        <Label 
                label={`Last time you and\n${friendName} went ${activity}.\n\nWant to try something\nnew next time?`}
                multiline = {true}
                >
            <div style={{ margin: '0 auto', maxWidth: '100%' }}>
            <DropdownSelect
                label="Try Something New"
                options={["Try Something New", `${capFirst(activity)} Again`, "Open to Anything"]}
                selected={selected}
                setSelected={setSelected}
                />
            </div>
            <ContinueButton style={{ margin: '0 auto', marginBottom: '25px' }} onClick={handleContinue}>
                Continue
            </ContinueButton>
        </Label>
        <ProgressBar totalSteps={3} currentStep={2} />
        <ButtonRow style={{ maxWidth: '350px' }}>
            <BackButton onClick={handleBack}>Back</BackButton> 
        </ButtonRow>
    </FormWrapper>
    </Container>
)};

export default Interested;