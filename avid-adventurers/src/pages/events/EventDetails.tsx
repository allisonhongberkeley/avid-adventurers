import React, { useMemo, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { eventData } from '../../utils/eventData';
import { EventPage } from '../../components/EventPage/EventPage';
import { ProfileBox } from '../../components/ProfileBox/ProfileBox';
import { Container, FormWrapperLeft, ScrollContainerPeople, Title2, ButtonRow, ContinueButton } from '../styles';
import { useBucketlist } from '../../utils/bucketlistContext';
import { useOnboarding } from '../../utils/onboardingContext'; 

const EventDetails: React.FC = () => {
  const { eventSlug } = useParams();
  const event = eventSlug ? eventData[eventSlug] : null;

  const { bucketlist, addToBucketlist, removeFromBucketlist } = useBucketlist();
  const { profileImage, firstName } = useOnboarding();

  const isInBucketlist = eventSlug ? bucketlist.includes(eventSlug) : false;

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleToggleBucketlist = () => {
    if (!eventSlug) return;
    if (isInBucketlist) {
      removeFromBucketlist(eventSlug);
    } else {
      addToBucketlist(eventSlug);
    }
  };

  useEffect(() => {
    if (isInBucketlist && scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [isInBucketlist]);

  const displayedPeople: { name: string; link: string; imageUrl: string }[] = useMemo(() => {
    if (!event) return [];

    const people = event.interestedPeople.map((name) => ({
      name,
      link: `/events/${eventSlug}/people/${name}`,
      imageUrl: `/${name}.png`
    }));

    if (isInBucketlist) {
      const myImageUrl = profileImage
        ? URL.createObjectURL(profileImage)  
        : '/Profile.png'; 

      people.unshift({
        name: 'Me',
        link: '/profileView',
        imageUrl: myImageUrl
      });
    }

    return people;
  }, [event, isInBucketlist, profileImage, firstName]);

  if (!event) return <div>Event not found</div>;

  return (
    <Container>
      <FormWrapperLeft>
        <EventPage
          title={event.title}
          time={event.time}
          weekday={event.weekday}
          date={event.date}
          imageUrl={event.imageUrl}
          location={event.location}
        />
        <br />
        <br />
        <Title2>Also interested</Title2>
        <ScrollContainerPeople ref={scrollRef} style={{ scrollBehavior: 'smooth' }}>
          {displayedPeople.map(({ name, link, imageUrl }) => (
            <ProfileBox
              key={name}
              imageUrl={imageUrl}
              name={name.charAt(0).toUpperCase() + name.slice(1)}
              link={link}
            />
          ))}
        </ScrollContainerPeople>
        <br />
        <ButtonRow>
          <ContinueButton
            onClick={handleToggleBucketlist}
            style={{
              backgroundColor: isInBucketlist ? '#f0f0f0' : '#222',
              color: isInBucketlist ? '#222' : '#fff',
              border: '1px solid #ccc',
              transition: 'all 0.3s ease'
            }}
          >
            {isInBucketlist ? 'Remove from Bucketlist' : 'Add to Bucketlist!'}
          </ContinueButton>
        </ButtonRow>
      </FormWrapperLeft>
    </Container>
  );
};

export default EventDetails;
