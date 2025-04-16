import styled from 'styled-components';
import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as Clear } from '../../assets/clear.svg';   

export const Wrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box; 
  border: 2px solid black;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0.5rem 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
`;

export const StyledInput = styled.input`
  min-width: 0;   
  flex: 1;
  border: none;
  font-size: 1rem;
  padding-left: 2rem; /* space for search icon */
  outline: none;
  background: transparent;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  left: 0.25rem;
  width: 1rem;
  height: 1rem;
  color: black;
`;

export const SearchButton = styled.button`
  all: unset;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;


export const ClearIcon = styled(Clear)`
  width: 1rem;
  height: 1rem;
  color: #333;
`;