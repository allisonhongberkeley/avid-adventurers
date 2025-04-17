import React from 'react';
import styled from 'styled-components';

interface ProgressBarProps {
  totalSteps: number;
  currentStep: number;
}

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 24px 0 16px 0;
  width: 100%;
`;

interface DotProps {
  isActive: boolean;
}

const Dot = styled.div<DotProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ isActive }) =>
    isActive
      ? 'rgba(0, 0, 0, 1)'
      : 'rgba(0, 0, 0, 0.2)'};
  transition: background-color 0.3s ease;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({ totalSteps, currentStep }) => {
  return (
    <ProgressBarContainer>
      {[...Array(totalSteps)].map((_, index) => (
        <Dot
          key={index}
          isActive={index <= currentStep - 1}
        />
      ))}
    </ProgressBarContainer>
  );
};

export default ProgressBar; 