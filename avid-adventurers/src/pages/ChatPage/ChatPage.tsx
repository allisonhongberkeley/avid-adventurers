import React, { useState } from 'react';
import {
    ChatContainer,
    Header,
    ContactName,
    MessageArea,
    AiMessageBubble,
    UserMessageBubble,
    InputArea,
    TextInput,
    AddButton,
} from './ChatPageStyles';

const ChatPage: React.FC = () => {
    // State to manage the text input value
    const [inputText, setInputText] = useState('Hey Tyler!');

    // Placeholder function for sending a message
    const handleSend = () => {
        console.log('Sending message:', inputText);
        // Clear input after sending (optional)
        // setInputText('');
    };

    // Placeholder function for adding attachment
    const handleAddAttachment = () => {
        console.log('Add attachment clicked');
        // Implement image upload logic here later
    };

    return (
        <ChatContainer>
            <Header>
                {/* Display the contact name */}
                <ContactName>Tyler</ContactName>
            </Header>
            <MessageArea>
                {/* Example AI message - REMOVED */}
                {/* <AiMessageBubble>
                    <span>You have been successfully matched! ...</span>
                </AiMessageBubble> */}
                {/* Example User message placeholder - REMOVED */}
                {/* <UserMessageBubble>
                    <span>Hi Claire! You like skateboarding too?! ...</span>
                </UserMessageBubble> */}
                {/* Message area is now empty, ready for dynamic messages */}
            </MessageArea>
            <InputArea>
                <TextInput
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type a message..." // Changed placeholder from image
                />
                <AddButton onClick={handleAddAttachment}>
                    +
                </AddButton>
            </InputArea>
        </ChatContainer>
    );
};

export default ChatPage; 