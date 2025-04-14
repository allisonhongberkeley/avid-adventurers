import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 350px;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.75rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    border-color: #333;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 0.75rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  font-size: 1rem;
  resize: none;

  &:focus {
    border-color: #333;
    outline: none;
  }
`;