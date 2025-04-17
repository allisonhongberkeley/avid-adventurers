import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EventBox } from '../../components/EventBox/EventBox';
import { useOnboarding } from '../../utils/onboardingContext';
import { Container, FormWrapper} from '../styles';

const Events: React.FC = () => {
    return (
    <Container>
      <FormWrapper>
        <EventBox
            time="6:00 PM"
            weekday="Saturday"
            date="April 19th"
            title="Sunset Picnic"
            imageUrl="/logo192.png"
            location="Golden Gate Park"
            interestedCount={24}
            link="/onboarding/profile"
        />
      </FormWrapper>
    </Container>
)};

export default Events;