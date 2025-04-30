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
} from './ChatInboxStyles';
import searchIcon from '../../assets/search.svg';

const ChatInbox: React.FC = () => {
  const navigate = useNavigate();

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
          <Avatar>T</Avatar>
          <ChatInfo>
            <ChatHeader>
              <UserName>Tyler</UserName>
            </ChatHeader>
            <MessagePreview>Hi Claire! You like skateboarding...</MessagePreview>
          </ChatInfo>
          <RightElements>
            <Timestamp>2:15 PM</Timestamp>
            <UnreadBadge>1</UnreadBadge>
          </RightElements>
        </ChatItemContainer>
      </ChatList>
    </PageWrapper>
  );
};

export default ChatInbox;
