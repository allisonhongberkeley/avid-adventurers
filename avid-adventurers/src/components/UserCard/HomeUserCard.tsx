import React, { useState, useEffect } from 'react';
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [action, setAction] = useState<'none' | 'pass' | 'match'>('none');

  const isSharedInterest = (interest: string) => currentUserInterests.includes(interest);
  const sortedInterests = [
    ...interests.filter(isSharedInterest),
    ...interests.filter((interest) => !isSharedInterest(interest)),
  ];

  const userSlugs = Object.keys(userData);
  const currentIndex = userSlugs.indexOf(userSlug);
  const nextUserSlug = userSlugs[currentIndex + 1];

  const handlePassOrMatch = (actionType: 'pass' | 'match') => {
    setAction(actionType);
    setIsTransitioning(true);

    setTimeout(() => {
      if (nextUserSlug && nextUserSlug !== 'tyler') {
        navigate(`/people/${nextUserSlug}`);
      } else {
        navigate('/home');
      }
    }, 500);
  };

  useEffect(() => {
    setIsTransitioning(false);
    setAction('none');
  }, [userSlug]);

  return (
    <PageWrapper>
      <Card
        style={{
          border: isTransitioning
            ? action === 'pass'
              ? '3px solid red'
              : action === 'match'
              ? '3px solid green'
              : 'none'
            : 'none',
          transition: 'opacity 0.8s ease, transform 0.8s ease', 
          opacity: isTransitioning ? 0 : 1, 
          transform: isTransitioning ? 'scale(0.95)' : 'scale(1)', 
        }}
      >
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
            <Button
                onClick={() => handlePassOrMatch('pass')}
                isActive={isTransitioning && action === 'pass'}
            >
            Pass
            </Button>
            <Button
                onClick={() => handlePassOrMatch('match')}
                isActive={isTransitioning && action === 'match'}
             >
            Match
            </Button>
        </ButtonGroup>
      </Card>
    </PageWrapper>
  );
};

export default HomeUserCard;
