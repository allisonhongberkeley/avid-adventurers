import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EventBox } from '../components/EventBox/EventBox';
import { useOnboarding } from '../utils/onboardingContext';
import { NavBar} from '../components/NavBar/NavBar';
import { Container, FormWrapperLeft, ScrollContainer, Title, Subtitle} from './styles';
import { ProfileBox } from '../components/ProfileBox/ProfileBox';

const Events: React.FC = () => {
  return (
    <Container>
      <FormWrapperLeft>
      <Title>Top Events</Title>
      <ScrollContainer>
        <EventBox
          time="6:00 PM"
          weekday="Tuesday"
          date="May 6th"
          title="Sunset Picnic"
          imageUrl="/picnic.png"
          location="Golden Gate Park"
          interestedCount={22}
          link="/events/sunset"
        />
        <EventBox
          time="5:30 PM"
          weekday="Thursday"
          date="May 8th"
          title="Guided Yoga"
          imageUrl="/yoga.png"
          location="Salesforce Park"
          interestedCount={37}
          link="/events/yoga"
        />
        <EventBox
          time="12:00 PM"
          weekday="Friday"
          date="May 9th"
          title="Lunch Meetup"
          imageUrl="/arizmendi.png"
          location="Arizmendi Bakery"
          interestedCount={7}
          link="/events/arizmendi"
        />
        <EventBox
          time="7:00 AM"
          weekday="Sunday"
          date="May 11th"
          title="Sailing"
          imageUrl="/sailing.png"
          location="Central Bay"
          interestedCount={3}
          link="/events/sail"
        />
      </ScrollContainer>
      <br></br>
      <Title>Top Matches</Title>
      <ScrollContainer>
        <ProfileBox
          imageUrl="/profile.png"
          name="Alex"
          link="/people/alex"
        />
        <ProfileBox
          imageUrl="/profile.png"
          name="Maya"
          link="/people/maya"
        />
        <ProfileBox
          imageUrl="/profile.png"
          name="Jordan"
          link="/people/jordan"
        />
        <ProfileBox
          imageUrl="/profile.png"
          name="Nina"
          link="/people/nina"
        />
        <ProfileBox
          imageUrl="/profile.png"
          name="Leo"
          link="/people/leo"
        />
      </ScrollContainer>
      </FormWrapperLeft>
      <NavBar/>
    </Container>
  );
};

export default Events;