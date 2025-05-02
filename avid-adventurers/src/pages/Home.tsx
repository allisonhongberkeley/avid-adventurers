import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EventBox } from '../components/EventBox/EventBox';
import { useOnboarding } from '../utils/onboardingContext';
import { NavBar } from '../components/NavBar/NavBar';
import { Container, FormWrapperLeft, ScrollContainer, Title } from './styles';
import { ProfileBox } from '../components/ProfileBox/ProfileBox';
import { eventData } from '../utils/eventData';

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
        <Title>Top Matches</Title>
        <ScrollContainer>
          <ProfileBox imageUrl="/profile.png" name="Alex" link="/people/alex" />
          <ProfileBox imageUrl="/profile.png" name="Maya" link="/people/maya" />
          <ProfileBox imageUrl="/profile.png" name="Jordan" link="/people/jordan" />
          <ProfileBox imageUrl="/profile.png" name="Nina" link="/people/nina" />
          <ProfileBox imageUrl="/profile.png" name="Leo" link="/people/leo" />
        </ScrollContainer>
      </FormWrapperLeft>
      <NavBar />
    </Container>
  );
};

export default Events;
