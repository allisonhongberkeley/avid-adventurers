import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExitButton } from './styles';

interface ExitProps {
  link: string;
}

export const ExitLink: React.FC<ExitProps> = ({ link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <ExitButton onClick={handleClick} aria-label="Close">
      <img src="/exit.png" alt="Exit" />
    </ExitButton>
  );
};