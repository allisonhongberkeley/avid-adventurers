import styled from 'styled-components';

export const StarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 1rem;
`;

export const Star = styled.span<{ filled: boolean }>`
  font-size: 2rem;
  cursor: pointer;
  color: ${(props) => (props.filled ? '#FFD700' : '#ccc')}; /* Gold color for filled stars */
`;

export {};