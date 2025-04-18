import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  margin-top: 0;
  align-self: flex-start;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 350px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const ProfileImageWrapper = styled.label`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  cursor: pointer;
  overflow: hidden;
  background-color: #f9f9f9;
  position: relative;

  &:hover {
    border-color: #888;
  }
`;

export const ProfileImageInput = styled.input`
  display: none;
`;

export const PlaceholderText = styled.span`
  color: #888;
  text-align: center;
  font-size: 0.875rem;
  padding: 0.5rem;
  z-index: 1;
`;

export const ProfileImagePreview = styled.img`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FallbackText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #888;
  text-align: center;
  font-size: 0.875rem;
  pointer-events: none;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  gap: 1rem;
  width: 100%;
`


export const BackButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

export const ContinueButton = styled.button`
  flex: 2;
  padding: 0.75rem;
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #000000;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

export const BackgroundWrapper = styled.div`
  background-image: url('https://cdn.pixabay.com/animation/2024/05/02/07/43/07-43-00-535_512.gif');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100vh;
  z-index: -1;
`;