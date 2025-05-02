import styled from 'styled-components';

export const LeftMessageRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px; 
`;

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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  `

export const Button = styled.button`
    display: flex;
    padding: 4px 24px;
    justify-content: center;
    align-items: center;
    border-radius: 72px;
    border: 1px solid var(--black, #1B1B1B);
    background: var(--gray-1, #EEE);
`;
