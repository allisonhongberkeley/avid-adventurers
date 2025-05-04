import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../utils/onboardingContext';
import { userData } from '../../utils/userData';
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

interface HomeUserCardProps {
  userSlug: string;
  name: string;
  age: number;
  pronouns: string;
  location: string;
  interests: string[];
  avatarUrl: string;
}

const HomeUserCard: React.FC<HomeUserCardProps> = ({
  userSlug,
  name,
  age,
  pronouns,
  location,
  interests,
  avatarUrl,
}) => {
  const navigate = useNavigate();
  const { interests: currentUserInterests } = useOnboarding();

  const isSharedInterest = (interest: string) => currentUserInterests.includes(interest);
  const sortedInterests = [
    ...interests.filter(isSharedInterest),
    ...interests.filter((interest) => !isSharedInterest(interest)),
  ];

  // Convert object keys into an ordered array
  const userSlugs = Object.keys(userData);
  const currentIndex = userSlugs.indexOf(userSlug);
  const nextUserSlug = userSlugs[currentIndex + 1];

  const handlePassOrMatch = () => {
    if (nextUserSlug) {
      navigate(`/people/${nextUserSlug}`);
    } else {
      navigate('/home');
    }
  };

  return (
    <PageWrapper>
      <Card>
        <ExitLink link="/home" />
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

export default HomeUserCard;
