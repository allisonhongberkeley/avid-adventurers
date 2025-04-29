import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageWrapper,
  Header,
  BackButton,
  Title,
  SearchInputContainer,
  StyledInput, // Assuming a generic styled input for now
  ChatList,
  ChatItemContainer,
  Avatar,
  ChatInfo,
  ChatHeader,
  UserName,
  Timestamp,
  MessagePreview,
  NavIcon,
  UnreadBadge,
  SearchIconImage,
  RightElements,
} from './ChatInboxStyles'; // We will create this file next
// Assuming Exit component can be used as a back button wrapper if needed
// import Exit from '../../components/Exit/Exit'; 
// Assuming ProfileImage can be adapted
// import ProfileImage from '../../components/ProfileImage/ProfileImage';
import searchIcon from '../../assets/search.svg'; // Assuming search icon exists

// Sample Data - Defining type for clarity
type Chat = {
  id: number;
  name: string;
  interest: string;
  message: string;
  time: string;
  unread: number;
  initial: string;
};

const sampleChats: Chat[] = [
  { id: 1, name: 'Tyler', interest: 'Skateboarding', message: 'Hi Claire! You like skateboarding...', time: '2:15 PM', unread: 1, initial: 'T' },
  { id: 2, name: 'Emma', interest: 'Hiking', message: 'What\'s your favorite....', time: '11:17 AM', unread: 0, initial: 'E' }, // Escaped apostrophe
  { id: 3, name: 'Jason', interest: 'Cooking', message: 'Let\'s meet at 5 pm at...', time: '10:15 AM', unread: 0, initial: 'J' }, // Escaped apostrophe
  { id: 4, name: 'Miguel', interest: 'Jazz', message: 'I\'m going to a concert near...', time: '9:07 AM', unread: 0, initial: 'M' }, // Escaped apostrophe
];

const ChatInbox: React.FC = () => {
  const navigate = useNavigate();

  const handleChatClick = (chatId: number) => {
    // Navigate to the specific chat page, e.g., /chat/:chatId
    navigate(`/chat/${chatId}`); // Use navigate to go to the chat page
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <PageWrapper>
      <Header>
        {/* Using a simple button styled as BackButton for now */}
        <BackButton onClick={handleBack}>&lt;</BackButton> 
        <Title>Chats</Title>
      </Header>
      <SearchInputContainer>
        <SearchIconImage src={searchIcon} alt="Search" />
        <StyledInput placeholder="Search" /> 
      </SearchInputContainer>
      <ChatList>
        {sampleChats.map((chat) => (
          <ChatItemContainer key={chat.id} onClick={() => handleChatClick(chat.id)}>
            {/* Using a simple div styled as Avatar for now */}
            <Avatar>{chat.initial}</Avatar> 
            <ChatInfo>
              <ChatHeader>
                <UserName>{chat.name} ({chat.interest})</UserName>
              </ChatHeader>
              <MessagePreview>{chat.message}</MessagePreview>
            </ChatInfo>
            <RightElements>
              <Timestamp>{chat.time}</Timestamp>
              {/* Conditionally render Badge OR NavIcon */}
              {chat.unread > 0 ? (
                <UnreadBadge>{chat.unread}</UnreadBadge>
              ) : (
                <NavIcon>&gt;</NavIcon>
              )}
            </RightElements>
          </ChatItemContainer>
        ))}
      </ChatList>
    </PageWrapper>
  );
};

export default ChatInbox; 