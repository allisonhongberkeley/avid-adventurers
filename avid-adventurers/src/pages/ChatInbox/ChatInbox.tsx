import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageWrapper,
  Header,
  BackButton,
  Title,
  SearchInputContainer,
  StyledInput,
  ChatList,
  ChatItemContainer,
  AvatarImage,
  ChatInfo,
  ChatHeader,
  UserName,
  Timestamp,
  MessagePreview,
  NavIcon,
  UnreadBadge,
  SearchIconImage,
  RightElements,
} from './ChatInboxStyles';
import searchIcon from '../../assets/search.svg';
import { NavBar } from '../../components/NavBar/NavBar';
import { useOnboarding } from '../../utils/onboardingContext';

const ChatInbox: React.FC = () => {
  const navigate = useNavigate();
  const { firstName } = useOnboarding();

  const handleChatClick = () => {
    navigate(`/chat`);
  };

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <PageWrapper>
      <Header>
        <BackButton onClick={handleBack}>&lt;</BackButton>
        <Title>Chats</Title>
      </Header>
      <SearchInputContainer>
        <SearchIconImage src={searchIcon} alt="Search" />
        <StyledInput placeholder="Search" />
      </SearchInputContainer>
      <ChatList>
        <ChatItemContainer onClick={handleChatClick}>
          <AvatarImage src="/Tyler.png" alt="Tyler" />
          <ChatInfo>
            <ChatHeader>
              <UserName>Tyler</UserName>
            </ChatHeader>
            <MessagePreview>
              Hi {firstName || 'there'}! You like skateboarding...
            </MessagePreview>
          </ChatInfo>
          <RightElements>
            <Timestamp>2:15 PM</Timestamp>
            <UnreadBadge>1</UnreadBadge>
          </RightElements>
        </ChatItemContainer>
      </ChatList>
      <NavBar />
    </PageWrapper>
  );
};

export default ChatInbox;
