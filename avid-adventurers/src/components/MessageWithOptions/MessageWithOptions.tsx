import { LeftMessageRow , AIIcon, UserMessageBubble, ButtonContainer, Button } from './styles';

interface MessageWithOptionsProps {
    text: string;
    onYes: () => void;
    onNo: () => void;
}
  
export const MessageWithOptions: React.FC<MessageWithOptionsProps> = ({ text, onYes, onNo }) => (
    <LeftMessageRow>
      <AIIcon>AI</AIIcon>
      <UserMessageBubble>
        <div>{text}</div>
        <ButtonContainer>
          <Button onClick={onYes}>✓ Yes</Button>
          <Button onClick={onNo}>☓ No</Button>
        </ButtonContainer>
      </UserMessageBubble>
    </LeftMessageRow>
  );

