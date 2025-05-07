import React, { useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


import {
    BackButton,
    ChatContainer,
    Header,
    ContactName,
    MessageArea,
    UserMessageBubble,
    InputArea,
    TextInput,
    SendButton,
    LeftMessageRow, 
    AIIcon,
} from './ChatPageStyles';

const SurveyResults: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const selectedTags = location.state?.selectedTags || [];

    /* [TODO] Hardcoded the contactName to be the other user's name. Fix after Inbox is built*/

    const handleBack = () => {
        navigate('/home');
    };

    const getRandomTag = (tags: string[]): string => {
        if (tags.length === 0) return 'doing more activities';
        return tags[Math.floor(Math.random() * tags.length)];
    };
    const randomTag = useMemo(() => getRandomTag(selectedTags), [selectedTags]);

    return (
        <ChatContainer>
            <Header>
                <BackButton onClick={handleBack}>{'<'}</BackButton>
                <ContactName>Tyler</ContactName> 
            </Header>
            <MessageArea>
                <LeftMessageRow>
                    <AIIcon>AI</AIIcon>
                    <UserMessageBubble>
                        What a fun hangout! You are both interested in {randomTag} together - strike up a new conversation!
                    </UserMessageBubble>
                </LeftMessageRow>
            </MessageArea>
            <InputArea>
                <TextInput
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type a message..."
                    onKeyDown={(e) => e.key === 'Enter' && handleBack()}
                />
                <SendButton onClick={handleBack}>{'>'}</SendButton>
            </InputArea>
        </ChatContainer>
    );
};

export default SurveyResults; 