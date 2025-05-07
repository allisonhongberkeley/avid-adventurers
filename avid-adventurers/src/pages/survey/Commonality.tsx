import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Label } from '../../components/Label/Label';
import { Container, FormWrapper, ButtonRow, ContinueButton, BackButton } from '../styles';
import { interestIcons } from '../../utils/Interests';
import { useSurvey } from '../../utils/surveyContext';
import { TagContainer, Tag, RemoveButton } from '../../components/TagSelector/styles';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const Commonality: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { friendName, friendInterests, setFriendInterests, updateInterests } = useSurvey();

    const allTags = [
        'skateboarding',
        'sailing',
        'hiking',
        'pickleball',
        'stargazing',
        'football',
    ];

    const [newTags, setNewTags] = useState<string[]>(friendInterests);

    const handleAddTag = (tag: string) => {
        const updated = [...newTags, tag];
        setNewTags(updated);
        setFriendInterests(updated);
        updateInterests(updated);
    };

    const handleRemoveTag = (tag: string) => {
        const updated = newTags.filter((t) => t !== tag);
        setNewTags(updated);
        setFriendInterests(updated);
        updateInterests(updated);
    };

    const handleContinue = () => {
        navigate('/survey/end', {
            state: { from: location.pathname, selectedTags: newTags }
        });
    };

    const handleBack = () => {
        navigate('/survey/interested');
    };

    const unselectedTags = allTags.filter((tag) => !friendInterests.includes(tag));

    return (
        <Container>
            <FormWrapper>
                <Label
                    label={`Here are ${friendName}'s\nother interests.\nSelect all that\ninterest you!`}
                    multiline={true}
                />
                <TagContainer style={{ marginTop: '-0.75rem' }}>
                    {friendInterests.map((tag) => (
                        <Tag key={tag} $selected={true} onClick={() => handleRemoveTag(tag)}>
                            {interestIcons[tag] ?? ''} {tag} <RemoveButton>✕</RemoveButton>
                        </Tag>
                    ))}
                </TagContainer>
                <TagContainer style={{ marginTop: '1rem' }}>
                    {unselectedTags.map((tag) => (
                        <Tag key={tag} $selected={false} onClick={() => handleAddTag(tag)}>
                            {interestIcons[tag] ?? ''} {tag}
                        </Tag>
                    ))}
                </TagContainer>
                {unselectedTags.length > 0 && <div style={{ marginBottom: '1rem' }} />}
                <ProgressBar totalSteps={3} currentStep={2} />
                <ButtonRow style={{ maxWidth: '350px' }}>
                    <BackButton onClick={handleBack}>Back</BackButton>
                    <ContinueButton onClick={handleContinue}>Continue</ContinueButton>
                </ButtonRow>
            </FormWrapper>
        </Container>
    );
};

export default Commonality;
