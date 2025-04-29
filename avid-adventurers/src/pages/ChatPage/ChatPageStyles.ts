import styled from 'styled-components';

// Main container for the chat page
export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; // Use 100vh to fill viewport height strictly
  max-width: 400px; 
  margin: auto; // Keep centering
  background-color: #ffffff; // White background like Profile
`;

// Header section
export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px; // Revert padding slightly
  background-color: #ffffff;
  border-bottom: 1px solid #eee;
  flex-shrink: 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.16);
  z-index: 999;
`;

// Apply Title-like styling
export const ContactName = styled.h2`
  font-size: 1.5rem; // Example size, adjust as needed to match Title feel
  font-weight: bold; // Titles are usually bold
  margin: 0 auto; // Keep centering
  text-align: center;
  padding: 5px 0; // Add some vertical padding if needed
`;

// Area for displaying messages
export const MessageArea = styled.div`
  flex-grow: 1; // Takes up available space
  padding: 15px;
  overflow-y: auto; // Allows internal scrolling
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #f9f9f9; // Light grey background for messages
`;

// Base message bubble style
const MessageBubbleBase = styled.div`
  padding: 10px 15px;
  border-radius: 12px;
  border: 3px solid var(--black, #1B1B1B);
  background: var(--white, #FFF);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.16);
  max-width: 75%;
  word-wrap: break-word;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;

export const UserMessageBubble = styled(MessageBubbleBase)`
  padding: 10px 15px;
  border: 1px solid #000;
  border-radius: 15px;
  max-width: 75%;
  word-wrap: break-word;
  background-color: #ffffff;
  position: relative;
`;

export const AIIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #ffffff;
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

// Input area at the bottom
export const InputArea = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: #ffffff; // White background for input area
  border-top: 1px solid #eee;
  flex-shrink: 0;
`;

// Apply LabeledInput-like styling
export const TextInput = styled.input`
  flex-grow: 1;
  border: 1px solid black; // From LabeledInput Input
  border-radius: 0.5rem; // From LabeledInput Input
  padding: 0.75rem; // From LabeledInput Input
  font-size: 1rem; // From LabeledInput Input
  margin-right: 10px;
  background-color: #ffffff;
  box-sizing: border-box; // Good practice from LabeledInput
  font-family: inherit; // Inherit font like LabeledInput

  &:focus {
    border-color: #333; // Focus style from LabeledInput
    outline: none;
  }
`;

export const MessageRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px; // Spacing between icon and bubble
`;

export const LeftMessageRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px; 
`;

export const ProfileIcon = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-left: 4px;
`;

// Button for adding attachments (+)
export const SendButton = styled.button`
  background-color: transparent;
  color: #000;
  border: 1px solid #000;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-size: 1.8rem;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;

  &:hover {
    background-color: #eee;
  }
`; 

export const BackButton = styled.button`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  margin: 0;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #666;
  }
`;