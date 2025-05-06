import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardWrapper, ProfileImage, ProfileTitle, } from './styles';

interface ProfileBoxProps {
  imageUrl: string;
  name: string;
  link: string;
  onPass?: () => void;
  onMatch?: () => void;
}

export const ProfileBox: React.FC<ProfileBoxProps> = ({
  imageUrl,
  name,
  link,
  onPass,
  onMatch,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(link);
    navigate(link);
  };

  return (
    <CardWrapper onClick={handleClick} style={{ cursor: 'pointer' }}>
      <ProfileImage src={imageUrl} alt={name} />
      <ProfileTitle>{name}</ProfileTitle>
    </CardWrapper>
  );
};