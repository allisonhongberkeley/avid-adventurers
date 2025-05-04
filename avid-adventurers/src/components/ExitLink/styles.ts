import styled from 'styled-components';

export const ExitButton = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
`;
