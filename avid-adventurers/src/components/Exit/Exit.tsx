import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExitButton } from './styles';

export const Exit: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <ExitButton onClick={handleClick} aria-label="Close">
      <img src="/exit.png" alt="Exit" />
    </ExitButton>
  );
};
