import styled from 'styled-components';


interface DotProps {
    isActive: boolean;
    isPast: boolean;
  }

export const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 16px 0;
`;

export const Dot = styled.div<DotProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ isActive, isPast }) =>
    isActive
      ? 'rgba(0, 0, 0, 1)'
      : isPast
      ? 'rgba(0, 0, 0, 0.6)'
      : 'rgba(0, 0, 0, 0.2)'};
  transition: background-color 0.3s ease;
`;