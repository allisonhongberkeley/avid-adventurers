import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../utils/onboardingContext';
import { eventData } from '../../utils/eventData';
import { interestIcons } from '../../utils/Interests'; 
import {
  PageWrapper,
  Card,
  Title,
  Avatar, 
  ProfileInfo,
  Location,
  Name,
  AvatarDiv,
  ProfileText,
  ButtonGroup,
  Button
} from './styles';

import { ExitLink } from '../ExitLink/ExitLink';
import { InterestsList, InterestTag } from '../../pages/styles';

interface EventUserCardProps {
  userSlug: string;
  name: string;
  age: number;
  pronouns: string;
  location: string;
  interests: string[];
  avatarUrl: string;
  eventSlug: string;
}

const UserCard: React.FC<EventUserCardProps> = ({
  userSlug,
  name,
  age,
  pronouns,
  location,
  interests,
  avatarUrl,
  eventSlug,
}) => {
  const navigate = useNavigate();
  const { interests: currentUserInterests } = useOnboarding();

  const event = eventData[eventSlug];
  if (!event) return <div>Event data not found.</div>;

  const currentIndex = event.interestedPeople.findIndex(
    (personSlug) => personSlug === userSlug
  );
  if (currentIndex === -1) return <div>Current user not found in event.</div>;

  const isLastUser = currentIndex === event.interestedPeople.length - 1;
  const nextUserSlug = !isLastUser
    ? event.interestedPeople[currentIndex + 1]
    : '';
  
  const handlePassOrMatch = () => {
    if (isLastUser) {
      navigate(`/events/${eventSlug}`);
    } else {
      navigate(`/events/${eventSlug}/people/${nextUserSlug}`);
    }
  };

  const isSharedInterest = (interest: string) => currentUserInterests.includes(interest);
  const sortedInterests = [
    ...interests.filter(isSharedInterest),
    ...interests.filter((interest) => !isSharedInterest(interest)),
  ];

  return (
    <PageWrapper>
      <Card>
        <ExitLink link={`/events/${eventSlug}`} />
        <Title>Meet {name}!</Title>

        <AvatarDiv>
          <Avatar src={avatarUrl ?? '/profile.png'} alt={`${name}'s avatar`} />
        </AvatarDiv>

        <ProfileInfo>
          <Name>{name}, {age}</Name>
          <ProfileText>({pronouns})</ProfileText>
          <Location>📍 {location}</Location>
        </ProfileInfo>

        <InterestsList>
          {sortedInterests.map((interest) => (
            <InterestTag
              key={interest}
              style={{
                backgroundColor: isSharedInterest(interest) ? '#36454F' : '#e0e0e0',
                color: isSharedInterest(interest) ? '#fff' : '#333',
              }}
            >
              {interestIcons[interest] ?? ''} {interest}
            </InterestTag>
          ))}
        </InterestsList>

        <ButtonGroup>
          <Button onClick={handlePassOrMatch}>Pass</Button>
          <Button onClick={handlePassOrMatch}>Match</Button>
        </ButtonGroup>
      </Card>
    </PageWrapper>
  );
};

export default UserCard;
