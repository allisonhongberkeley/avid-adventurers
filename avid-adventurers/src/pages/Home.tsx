import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EventBox } from '../components/EventBox/EventBox';
import { useOnboarding } from '../utils/onboardingContext';
import { NavBar } from '../components/NavBar/NavBar';
import { Container, FormWrapperLeft, ScrollContainer, Title } from './styles';
import { ProfileBox } from '../components/ProfileBox/ProfileBox';
import { eventData } from '../utils/eventData';
import { userData } from '../utils/userData';


const Events: React.FC = () => {
  return (
    <Container>
      <FormWrapperLeft>
        <Title>Top Events</Title>
        <ScrollContainer>
          {Object.entries(eventData).map(([key, event]) => (
            <EventBox
              key={key}
              time={event.time}
              weekday={event.weekday}
              date={event.date}
              title={event.title}
              imageUrl={event.imageUrl}
              location={event.location}
              interestedCount={event.interestedPeople.length}
              link={`/events/${key}`}
            />
          ))}
        </ScrollContainer>

        <br />
        <Title>Top Picks</Title>
        <ScrollContainer>
          {Object.entries(userData).map(([key, user]) => (
            <ProfileBox
              key={key}
              imageUrl={user.avatarUrl ?? '/profile.png'}
              name={user.name}
              link={`/people/${key}`}
            />
          ))}
        </ScrollContainer>
      </FormWrapperLeft>
      <NavBar />
    </Container>
  );
};

export default Events;
