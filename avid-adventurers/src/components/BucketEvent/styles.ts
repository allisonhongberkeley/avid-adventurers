import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  border-radius: 8px;
  border: 2px solid black;
  box-shadow: 0 4px 10px rgba(0,0,0,0.45); 
  margin-bottom: 25px;
  max-width: 350px;
  padding-bottom: 15px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const HeaderImage = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const Title = styled.h1`
  margin: 16px 15px 5px;
  font-size: 1.75rem;
`;

export const InfoText = styled.p`
  align-self: flex-start; 
  margin: 4px 15px;
`;

export const FadingWrapper = styled.div<{ fade: boolean }>`
  opacity: ${(props) => (props.fade ? 0 : 1)};
  transition: opacity 0.4s ease;
`;

export const HeartIcon = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 10;
  background: transparent;
  border: none;
`;

