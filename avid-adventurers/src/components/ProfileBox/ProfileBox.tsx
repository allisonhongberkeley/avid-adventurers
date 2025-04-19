import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardWrapper, ProfileImage, ProfileTitle, } from './styles';

interface ProfileBoxProps {
  imageUrl: string;
  name: string;
  link: string;
}

export const ProfileBox: React.FC<ProfileBoxProps> = ({
  imageUrl,
  name,
  link,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <CardWrapper onClick={handleClick} style={{ cursor: 'pointer' }}>
      <ProfileImage src={imageUrl} alt={name} />
      <ProfileTitle>{name}</ProfileTitle>
    </CardWrapper>
  );
};