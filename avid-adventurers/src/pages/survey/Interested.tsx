import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from '../../components/Label/Label';
import { Container, FormWrapper, ButtonRow, ContinueButton } from '../styles';
import { useSurvey } from '../../utils/surveyContext';
import { DropdownSelect } from '../../components/DropdownSelect/DropdownSelect';

const capFirst = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

const Interested: React.FC = () => {
    const navigate = useNavigate();
    const { friendProfileImage, friendName, friendInterests, activity, interests, rating, setRating, updateInterests, setProfileImage } = useSurvey();

    const [selected, setSelected] = useState("Try Something New");

    const handleContinue = () => {
        if (selected === "Try Something New") {
            navigate('/survey/commonality');
        } else {
            navigate('/survey/end'); 
        }
    }
    return (
    <Container>
    <FormWrapper>
        <Label
                label={`Last time you and ${friendName} went ${activity}. Want to try something new next time?`}
                multiline = {true}
                >
            <DropdownSelect
                label="Try Something New"
                options={["Try Something New", `${capFirst(activity)} Again`, "Open to Anything"]}
                selected={selected}
                setSelected={setSelected}
                />
            <ContinueButton style={{ marginBottom: '15px' }} onClick={handleContinue}>
                Continue
            </ContinueButton>

        </Label>
    </FormWrapper>
    </Container>
)};

export default Interested;