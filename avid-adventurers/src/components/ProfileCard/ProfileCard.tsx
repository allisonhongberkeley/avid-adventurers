import React from 'react';
import { interestIcons } from '../../utils/Interests';
import {
  Card,
  Title,
  Avatar,
  ProfileInfo,
  Location,
  Message,
  ButtonGroup,
  Button,
} from './styles';

import { InterestsList, InterestTag } from '../../pages/styles';

const ProfileCard: React.FC = () => {

  const tylerInterests = ['skateboarding', 'hiking', 'sail', 'pickle ball', 'football', 'stargazing'];

  /* Say Tyler's first 3 interest match with us*/
  const tylerSelected = tylerInterests.slice(0, 3);

  return (
    <Card>
      <Title>Meet Tyler!</Title>
      
      <Avatar>
        {/* Avatar illustration would go here */}
      </Avatar>
      
      <ProfileInfo>
        <h3>Tyler, 30</h3>
        <Location>
          <span>📍</span>
          <span>North Beach, SF</span>
        </Location>
      </ProfileInfo>
      
      <InterestsList>
        {tylerInterests.map((interest) => (
          <InterestTag
            key={interest}
            selected={tylerSelected.includes(interest)}
          >
            {interestIcons[interest] ?? ''} {interest}
          </InterestTag>
        ))}
      </InterestsList>
      <Message>
        You and Tyler are both looking for a hiking and sailing buddy!
      </Message>
      
      <ButtonGroup>
        <Button>Pass</Button>
        <Button>Match</Button>
      </ButtonGroup>
    </Card>
  );
};

export default ProfileCard;
