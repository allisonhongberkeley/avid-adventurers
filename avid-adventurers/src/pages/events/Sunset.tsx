import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EventPage } from '../../components/EventPage/EventPage';
import { useOnboarding } from '../../utils/onboardingContext';
import { ProfileBox } from '../../components/ProfileBox/ProfileBox';
import { Container, FormWrapperLeft, ScrollContainer, Subtitle, Title2} from '../styles';

const Sunset: React.FC = () => {
  return (
    <Container>
      <FormWrapperLeft>
        <EventPage
          time="6:00 PM"
          weekday="Tuesday"
          date="May 6th"
          title="Sunset Picnic"
          imageUrl="/picnic.png"
          location="Golden Gate Park"
        />
        <br></br>
        <br></br>
        <Title2>Also interested </Title2>
        <ScrollContainer>
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
            name="Alex"
            link="/people/alex"
          />
        </ScrollContainer>
      </FormWrapperLeft>
    </Container>
  );
};

export default Sunset;