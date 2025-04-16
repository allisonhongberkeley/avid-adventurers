import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

export const DropdownHeader = styled.div<{ $isOpen: boolean }>`
  padding: 0.75rem;
  border: ${({ $isOpen }) => ($isOpen ? 'none' : '2px solid black')};
  border-radius: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${({ $isOpen }) => ($isOpen ? '#EEE' : 'white')};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.16);
`;


export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const Tag = styled.button<{ $selected: boolean; $isClosed?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: ${({ $isClosed }) => ($isClosed ? 'none' : '1px solid black')};
  border-radius: 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;
  background-color: ${({ $isClosed, $selected }) =>
    $isClosed
      ? 'var(--lilac-2, #E6E7EE)'
      : $selected
      ? '#EEE'
      : 'white'};
    color: ${({ $isClosed }) => ($isClosed ? '#333' : 'black')};


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
