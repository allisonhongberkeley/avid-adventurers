import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventBox } from '../components/EventBox/EventBox';
import { useOnboarding } from '../utils/onboardingContext';
import { NavBar } from '../components/NavBar/NavBar';
import { Container, HeaderRow, FormWrapperLeft, ScrollContainerEvents, ScrollContainerPeople, Title, Title3, SearchRow, SearchInputContainer, SearchIconImage, SearchInputField } from './styles';
import { ProfileBox } from '../components/ProfileBox/ProfileBox';
import { eventData } from '../utils/eventData';
import { userData } from '../utils/userData';
import searchIcon from '../assets/search.svg';


const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = Object.entries(eventData).filter(([_, event]) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <FormWrapperLeft>
        <SearchRow>
          <Title3>Top Events</Title3>
          <SearchInputContainer>
            <SearchIconImage src={searchIcon} alt="Search"/>
            <SearchInputField
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchInputContainer>
        </SearchRow>
        <ScrollContainerEvents>
          {filteredEvents.length === 0 ? (
          <p style={{ padding: '20px', color: '#888' }}>
            No events match your search.
          </p>
          ) : (
          filteredEvents.map(([key, event]) => (
            <EventBox
              key={key}
              time={event.time}
              weekday={event.weekday}
              date={event.date}
              title={event.title}
              imageUrl={event.imageUrl}
              location={event.location}
              interestedCount={event.interestedPeople.length}
              link={`/events/${key}`}
            />
            ))
          )}
        </ScrollContainerEvents>
        <br></br>
        <Title>Top Picks</Title>
        <ScrollContainerPeople>
          {Object.entries(userData)
            .filter(([key]) => key !== 'tyler')
            .map(([key, user]) => (
              <ProfileBox
                key={key}
                imageUrl={user.avatarUrl ?? '/profile.png'}
                name={user.name}
                link={`/people/${key}`}
              />
            ))}
        </ScrollContainerPeople>
        <br></br>
        <br></br>
        <br></br>
      </FormWrapperLeft>
      <NavBar />
    </Container>
  );
};

export default Events;
