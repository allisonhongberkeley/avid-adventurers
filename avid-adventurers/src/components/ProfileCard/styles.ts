import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #D9D9D9;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
`;

export const Message = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 4rem;
  width: 100%;
`;

export const Button = styled.button`
  flex: 1;
  padding: 0.75rem;
  border-radius: 8px;
  border: 4px solid #1B1B1B;
  background-color: #FFF;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    color: #FFF;
    background-color: #1B1B1B;
  }
`;
