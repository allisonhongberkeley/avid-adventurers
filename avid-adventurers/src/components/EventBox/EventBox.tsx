import React from 'react';
import { Link } from 'react-router-dom';
import { CardWrapper, EventImage, EventTitle, EventDetail, Interested } from './styles';

interface EventBoxProps {
  time: string;
  weekday: string;
  date: string;
  title: string;
  imageUrl: string;
  location: string;
  interestedCount: number;
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
  return (
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <CardWrapper>
        <EventDetail>{weekday}, {date} at {time}</EventDetail>
        <EventImage src={imageUrl} alt={title} />
        <EventTitle>{title}</EventTitle>
        <EventDetail>{location}</EventDetail>
        <Interested>{interestedCount} interested</Interested>
      </CardWrapper>
    </Link>
  );
};

