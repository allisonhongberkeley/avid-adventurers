import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardWrapper, EventImage, EventTitle, EventDetail, Interested } from './styles';

interface EventBoxProps {
  time: string;
  weekday: string;
  date: string;
  title: string;
  imageUrl?: string;
  location: string;
  interestedCount?: number;
  link: string;
}

export const EventBox: React.FC<EventBoxProps> = ({
  time,
  weekday,
  date,
  title,
  imageUrl,
  location,
  interestedCount,
  link,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <CardWrapper onClick={handleClick} style={{ cursor: 'pointer' }}>
      <EventDetail><b>{weekday}, {date}</b> at {time}</EventDetail>
      {imageUrl && <EventImage src={imageUrl} alt={title} />}
      <EventTitle>{title}</EventTitle>
      <EventDetail>{location}</EventDetail>
      {interestedCount && <Interested>{interestedCount} interested</Interested>}
    </CardWrapper>
  );
};