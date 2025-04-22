import styled from 'styled-components';

// Main container for the chat page
export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; // Use 100vh to fill viewport height strictly
  max-width: 350px; 
  margin: auto; // Keep centering
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // Keep shadow
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

  // Make back arrow larger and give it more space
  &::before {
    content: '< ';
    font-size: 1.8rem;
    font-weight: bold;
    cursor: pointer;
    padding: 5px;
    position: absolute;
    left: 15px; // Same as padding
    top: 50%;
    transform: translateY(-50%);
  }
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
  gap: 10px;
  background-color: #f9f9f9; // Light grey background for messages
`;

// Base message bubble style
const MessageBubbleBase = styled.div`
  padding: 10px 15px;
  border: 1px solid #000;
  border-radius: 15px;
  max-width: 75%;
  word-wrap: break-word;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;

  &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      width: 0;
      height: 0;
      border: 8px solid transparent;
  }
`;

// AI message bubble style
export const AiMessageBubble = styled(MessageBubbleBase)`
  background-color: #ffffff;
  align-self: flex-start;

  &::before {
      content: 'AI';
      display: inline-block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      border-radius: 50%;
      border: 1px solid #000;
      background-color: #ffffff;
      text-align: center;
      font-size: 0.8rem;
      flex-shrink: 0;
      margin-right: 5px;
  }

  &::after {
    left: -10px;
    border-right-color: #000;
  }

  // Inner white part of tail
  & > span::before { // Target span inside for positioning relative to text
    content: '';
    position: absolute;
    bottom: 5px;
    left: -8px;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-right-color: #ffffff;
  }
`;

// User message bubble style (placeholder)
export const UserMessageBubble = styled(MessageBubbleBase)`
  background-color: #ffffff;
  align-self: flex-end;

  &::before {
      content: ' ';
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid #000;
      background-color: #eee;
      background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">👤</text></svg>');
      background-size: 70%;
      background-position: center;
      background-repeat: no-repeat;
      text-align: center;
      font-size: 1rem;
      flex-shrink: 0;
      order: 1;
      margin-left: 8px;
  }

  &::after {
    right: -10px;
    border-left-color: #000;
  }

  // Inner white part of tail
  & > span::before { // Target span inside
    content: '';
    position: absolute;
    bottom: 5px;
    right: -8px;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-left-color: #ffffff;
  }
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

// Button for adding attachments (+)
export const AddButton = styled.button`
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