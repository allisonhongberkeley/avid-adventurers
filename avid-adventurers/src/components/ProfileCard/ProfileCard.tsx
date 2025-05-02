import React from 'react';
import styled from 'styled-components';

// Styled components
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
`;

const TagsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.75rem;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Tag = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Message = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  flex: 1;
  padding: 0.75rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  ${({ variant }) => variant === 'primary' ? `
    background-color: #4CAF50;
    color: white;
    &:hover {
      background-color: #45a049;
    }
  ` : `
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    &:hover {
      background-color: #e0e0e0;
    }
  `}
`;

const ProfileCard: React.FC = () => {
  return (
    <Card>
      <Title>Meet Tyler!</Title>
      
      <Avatar>
        {/* Avatar illustration would go here */}
      </Avatar>
      
      <ProfileInfo>
        <h3>Tyler, 30</h3>
        <Location>
          <span>📍</span>
          <span>North Beach, SF</span>
        </Location>
      </ProfileInfo>
      
      <TagsGrid>
        <Tag>🛹 skateboarding</Tag>
        <Tag>🏔️ hiking</Tag>
        <Tag>⛵ sailing</Tag>
        <Tag>🏓 pickle ball</Tag>
        <Tag>🏈 football</Tag>
        <Tag>🔭 stargazing</Tag>
      </TagsGrid>
      
      <Message>
        You and Tyler are both looking for a hiking and sailing buddy!!
      </Message>
      
      <ButtonGroup>
        <Button>Pass</Button>
        <Button variant="primary">Match</Button>
      </ButtonGroup>
    </Card>
  );
};

export default ProfileCard; 