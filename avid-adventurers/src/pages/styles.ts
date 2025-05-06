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

export const Title3 = styled.h1`
  margin-bottom: 1rem;
  text-align: center;
  white-space: nowrap;
`;

export const Title2 = styled.h2`
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
  max-width: 400px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormWrapperLeft = styled.div`
  width: 100%;
  max-width: 400px; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const PhoneContainer = styled.div`
  width: 400px;
  min-height: 100vh;
  background-image: url('https://cdn.pixabay.com/animation/2024/05/02/07/43/07-43-00-535_512.gif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

export const ScrollContainerPeople = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;
  width: 98%;
  box-sizing: border-box;
  scroll-snap-type: x mandatory;
  min-height: 200px;

  & > * {
    scroll-snap-align: start;
    flex-shrink: 0;
  }

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.2);
    border-radius: 4px;
  }
`;

export const ScrollContainerEvents = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;
  width: 98%;
  box-sizing: border-box;
  scroll-snap-type: x mandatory;
  min-height: 380px;
  margin-top: 10px;

  & > * {
    scroll-snap-align: start;
    flex-shrink: 0;
  }

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.2);
    border-radius: 4px;
  }
`;

export const EmptyStateImage = styled.img`
  width: 300px;
  max-width: 80%;
  height: auto;
  margin-bottom: 0rem;
  object-fit: contain;
  align-self: center;
`;

export const EmptyMessage = styled.p`
  font-size: 1.25rem;
  color: #444;
  text-align: center;
  margin-bottom: 2rem;
`;

export const InterestTag = styled.div<{ selected?: boolean }>`
  padding: 0.375rem 0.625rem;
  border-radius: 8px;
  background-color: #E6E7EE;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  ${({ selected }) =>
    selected &&
    `
    border: 3px solid #000;
  `}
`;

export const InterestsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;


export const Card = styled.div`
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

export const Button = styled.button`
  flex: 1;
  padding: 1rem;
  border-radius: 8px;
  border: 3px solid #1b1b1b;
  background-color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    color: #fff;
    background-color: #1b1b1b;
  }
`;

export const SearchRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px;
  width: 100%;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  flex-shrink: 1; 
  flex-grow: 0;
  max-width: 100%; 
  overflow: hidden;
`;

export const SearchIconImage = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  opacity: 0.5;
`;

export const SearchInputField = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  background: transparent;
  min-width: 0;  /* critical to allow shrinking inside flex */
  width: 100%;   /* take up container width */
  &::placeholder {
    color: #aaa;
  }
`;