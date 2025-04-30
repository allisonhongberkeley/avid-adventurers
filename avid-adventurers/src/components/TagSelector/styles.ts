import styled from 'styled-components';

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  max-width: 350px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

export const Tag = styled.button<{ $selected: boolean;}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: ${({ $selected }) =>
    $selected ? 'none' : '1px solid black'};
  border-radius: 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;
  background-color: ${({ $selected }) =>
    $selected ? '#E6E7EE' : 'white'};
  color: ${({ $selected }) => ($selected? '#333' : 'black')};

  &:hover {
    opacity: 0.8;
  }
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  color: #333;
  padding: 0;
  margin: 0;
`;
