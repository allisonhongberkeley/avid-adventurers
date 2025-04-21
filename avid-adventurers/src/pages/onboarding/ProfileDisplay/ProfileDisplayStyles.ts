import styled from 'styled-components';

// Styles for ProfileDisplay component
export const WelcomeTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const UserName = styled.h2`
  font-size: 1.25rem;
  margin: 1rem 0;
`;

export const LocationText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const InterestsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const InterestTag = styled.div`
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

export const GetStartedButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`; 