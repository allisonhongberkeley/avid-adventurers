import React from 'react';
import { HeaderImage, Title, InfoText, PageWrapper, ImageWrapper } from './styles';
import { Exit } from '../Exit/Exit';

interface EventPageProps {
  time: string;
  weekday: string;
  date: string;
  title: string;
  imageUrl: string;
  location: string;
}

export const EventPage: React.FC<EventPageProps> = ({
  time,
  weekday,
  date,
  title,
  imageUrl,
  location,
}) => {
  return (
    <PageWrapper>
      <ImageWrapper>
        <HeaderImage src={imageUrl} alt={title} />
        <Exit link="/home" />
      </ImageWrapper>
      <Title>{title}</Title>
      <InfoText><strong>Location:</strong> {location}</InfoText>
      <InfoText><strong>When:</strong> {weekday}, {date} at {time}</InfoText>
    </PageWrapper>
  );
};
