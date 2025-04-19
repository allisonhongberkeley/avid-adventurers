import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EventPage } from '../../components/EventPage/EventPage';
import { useOnboarding } from '../../utils/onboardingContext';
import { ProfileBox } from '../../components/ProfileBox/ProfileBox';
import { Container, FormWrapperLeft, ScrollContainer, Subtitle, Title2} from '../styles';

const Yoga: React.FC = () => {
  return (
    <Container>
      <FormWrapperLeft>
        <EventPage
          time="5:30 PM"
          weekday="Thursday"
          date="May 8th"
          title="Guided Yoga"
          imageUrl="/yoga.png"
          location="Salesforce Park"
        />
        <br></br>
        <br></br>
        <Title2>Also interested </Title2>
        <ScrollContainer>
          <ProfileBox
            imageUrl="/profile.png"
            name="Leo"
            link="/people/leo"
          />
          <ProfileBox
            imageUrl="/profile.png"
            name="Nina"
            link="/people/nina"
          />
          <ProfileBox
            imageUrl="/profile.png"
            name="Maya"
            link="/people/maya"
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

export default Yoga;