import React from 'react';
import { useParams } from 'react-router-dom';
import { userData } from '../../utils/userData';
import HomeUserCard from '../../components/UserCard/HomeUserCard';
import { Container, FormWrapperLeft } from '../styles';
import { eventData } from '../../utils/eventData';

const HomeUserDetails: React.FC = () => {
    const { userSlug } = useParams<{userSlug: string }>();


    if (!userSlug) {
        return <div>Invalid user.</div>;
    }

    const user = userData[userSlug];

    if (!user) {
        return <div>User not found.</div>;
    }

    return (
        <Container>
            <FormWrapperLeft>
                <HomeUserCard
                    userSlug={userSlug}
                    name={user.name}
                    age={user.age}
                    pronouns={user.pronouns}
                    location={user.location}
                    interests={user.interests}
                    avatarUrl={user.avatarUrl ?? '/profile.png'}
                />
            </FormWrapperLeft>
        </Container>
    );
};

export default HomeUserDetails;
