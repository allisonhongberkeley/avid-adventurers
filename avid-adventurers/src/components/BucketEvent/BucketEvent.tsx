import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderImage, Title, InfoText, PageWrapper, ImageWrapper } from './styles';
import { Exit } from '../Exit/Exit';

interface BucketEventProps {
  title: string;
  time: string;
  weekday: string;
  date: string;
  imageUrl: string;
  location: string;
  link: string;
}

export const BucketEvent: React.FC<BucketEventProps> = ({
  time,
  weekday,
  date,
  title,
  imageUrl,
  location,
  link
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <PageWrapper onClick={handleClick} style={{ cursor: 'pointer' }}>
      <ImageWrapper>
        <HeaderImage src={imageUrl} alt={title} />
      </ImageWrapper>
      <Title>{title}</Title>
      <InfoText><strong>Location:</strong> {location}</InfoText>
      <InfoText><strong>When:</strong> {weekday}, {date} at {time}</InfoText>
    </PageWrapper>
  );
};
