import React from 'react';
import { useParams } from 'react-router-dom';
import { eventData } from '../../utils/eventData';
import { EventPage } from '../../components/EventPage/EventPage';
import { ProfileBox } from '../../components/ProfileBox/ProfileBox';
import { Container, FormWrapperLeft, ScrollContainer, Title2 } from '../styles';

const EventDetails: React.FC = () => {
  const { eventSlug } = useParams();
  const event = eventSlug ? eventData[eventSlug] : null;

  if (!event) return <div>Event not found</div>;

  return (
    <Container>
      <FormWrapperLeft>
        <EventPage
          title={event.title}
          time={event.time}
          weekday={event.weekday}
          date={event.date}
          imageUrl={event.imageUrl}
          location={event.location}
        />
        <br />
        <br />
        <Title2>Also interested</Title2>
        <ScrollContainer>
          {event.interestedPeople.map((name) => (
            <ProfileBox
              key={name}
              imageUrl="/profile.png"
              name={name.charAt(0).toUpperCase() + name.slice(1)}
              link={`/people/${name}`}
            />
          ))}
        </ScrollContainer>
      </FormWrapperLeft>
    </Container>
  );
};

export default EventDetails;
