import React from 'react';
import { ProgressBarContainer, Dot } from './styles';

interface ProgressBarProps {
  totalSteps: number;
  currentStep: number;
}


const ProgressBar: React.FC<ProgressBarProps> = ({ totalSteps, currentStep }) => {
  return (
    <ProgressBarContainer>
      {[...Array(totalSteps)].map((_, index) => (
        <Dot
          key={index}
          isActive={index === currentStep - 1}
          isPast={index < currentStep - 1}
        />
      ))}
    </ProgressBarContainer>
  );
};

export default ProgressBar; 