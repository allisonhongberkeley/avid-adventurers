import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  border-radius: 8px;
  border: 2px solid black;
  box-shadow: 0 4px 10px rgba(0,0,0,0.45); 
  padding: 10px;
  margin-bottom: 25px;
  max-width: 350px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const HeaderImage = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  margin: 16px 0 8px;
`;

export const InfoText = styled.p`
  font-size: 1rem;
  align-self: flex-start; 
  margin: 4px 0;
`;

