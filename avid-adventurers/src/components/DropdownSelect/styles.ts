import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 1rem;
`;

export const DropdownHeader = styled.div<{ isOpen: boolean }>`
  width: 100%;
  padding: 10px;
  border: 2px solid black;
  border-radius: ${({ isOpen }) => (isOpen ? '8px 8px 0 0' : '8px')};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
`;

export const DropdownList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 2px solid black;
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-top: none;
  box-sizing: border-box;

`;

export const DropdownListItem = styled.li`
  padding: 10px;
  background-color: white;
  cursor: pointer;
  border-bottom: 2px solid black;
  &:last-child {
    border-bottom: none;
    border-bottom-left-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
  }
`;
