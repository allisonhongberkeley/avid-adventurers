import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EventPage } from '../../components/EventPage/EventPage';
import { useOnboarding } from '../../utils/onboardingContext';
import { Exit } from '../../components/Exit/Exit';
import { ProfileBox } from '../../components/ProfileBox/ProfileBox';
import { Container, Title2, FormWrapperLeft, ScrollContainer, Subtitle} from '../styles';

const Arizmendi: React.FC = () => {
  return (
    <Container>
      <FormWrapperLeft>
        <EventPage
          time="12:00 PM"
          weekday="Friday"
          date="May 9th"
          title="Lunch Meetup"
          imageUrl="/arizmendi.png"
          location="Arizmendi Bakery"
        />
        <br></br>
        <br></br>
        <Title2>Also interested </Title2>
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
        </ScrollContainer>
      </FormWrapperLeft>
    </Container>
  );
};

export default Arizmendi;