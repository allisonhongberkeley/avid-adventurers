import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; 
`;

export const Card = styled.div<{ feedbackColor?: string; isTransitioning?: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  padding: 2rem;
  background-color: #d9d9d9;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  position: relative;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #1b1b1b;
`;

export const Name = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  color: #1b1b1b;
  text-align: left;
`;

export const Avatar = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin-bottom: 1.5rem;
  border: 2px solid black;
  object-fit: cover;
`;

export const AvatarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* ⬅ Align left */
  width: 100%;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const ProfileText = styled.p`
  font-size: 1.3rem;
  color: #333;
  margin: 0;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 1.3rem;
`;

export const Message = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-size: 1.2rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  margin-top: 2rem;
`;

export const Button = styled.button<{ isActive?: boolean; activeColor?: string }>`
  flex: 1;
  padding: 1rem;
  border-radius: 8px;
  border: 3px solid #1b1b1b;
  background-color: ${({ isActive }) => (isActive ? '#333' : '#fff')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#1b1b1b')};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
`;


