import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderImage, Title, InfoText, PageWrapper, ImageWrapper } from './styles';
import { ExitLink } from '../ExitLink/ExitLink';

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
  const locationObj = useLocation();
  const currentPath = locationObj.pathname;

  const exitLink = currentPath.startsWith('/Bucket/') ? '/bucket' : '/home';

  return (
    <PageWrapper>
      <ImageWrapper>
        <HeaderImage src={imageUrl} alt={title} />
        <ExitLink link ={exitLink} />
      </ImageWrapper>
      <Title>{title}</Title>
      <InfoText><strong>Location:</strong> {location}</InfoText>
      <InfoText><strong>When:</strong> {weekday}, {date} at {time}</InfoText>
    </PageWrapper>
  );
};
