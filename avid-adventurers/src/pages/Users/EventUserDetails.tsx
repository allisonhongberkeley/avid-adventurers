import React from 'react';
import { useParams } from 'react-router-dom';
import { userData } from '../../utils/userData';
import EventUserCard from '../../components/UserCard/EventUserCard';
import { Container, FormWrapperLeft } from '../styles';
import { eventData } from '../../utils/eventData';

const EventUserDetails: React.FC = () => {
    const { eventSlug, userSlug } = useParams<{ eventSlug: string; userSlug: string }>();

    if (!eventSlug) {
        return <div>Invalid event.</div>;
    }

    if (!userSlug) {
        return <div>Invalid user.</div>;
    }

    const event = eventData[eventSlug];
    const user = userData[userSlug];

    if (!event) {
        return <div>Event not found.</div>;
    }

    if (!user) {
        return <div>User not found.</div>;
    }

    return (
        <Container>
            <FormWrapperLeft>
                <EventUserCard
                    userSlug={userSlug}
                    name={user.name}
                    age={user.age}
                    pronouns={user.pronouns}
                    location={user.location}
                    interests={user.interests}
                    avatarUrl={user.avatarUrl ?? '/profile.png'}
                    eventSlug={eventSlug}
                />
            </FormWrapperLeft>
        </Container>
    );
};

export default EventUserDetails;
