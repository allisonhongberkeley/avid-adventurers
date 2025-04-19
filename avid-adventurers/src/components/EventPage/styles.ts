import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 350px;
  display: block;
  object-fit: cover;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  margin: 16px 0 8px;
`;

export const InfoText = styled.p`
  font-size: 1rem;
  align-self: flex-start; 
  margin: 4px 0;
`;
