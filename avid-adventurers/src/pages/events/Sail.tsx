import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EventPage } from '../../components/EventPage/EventPage';
import { useOnboarding } from '../../utils/onboardingContext';
import { ProfileBox } from '../../components/ProfileBox/ProfileBox';
import { Container, FormWrapperLeft, ScrollContainer, Subtitle, Title2} from '../styles';

const Sail: React.FC = () => {
  return (
    <Container>
      <FormWrapperLeft>
        <EventPage
          time="7:00 AM"
          weekday="Sunday"
          date="May 11th"
          title="Sailing"
          imageUrl="/sailing.png"
          location="Central Bay"
        />
        <br></br>
        <br></br>
        <Title2>Also interested </Title2>
        <ScrollContainer>
          <ProfileBox
            imageUrl="/profile.png"
            name="Maya"
            link="/people/maya"
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
    </Container>
  );
};

export default Sail;