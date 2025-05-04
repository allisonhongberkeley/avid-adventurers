import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBucketlist } from '../utils/bucketlistContext';
import { eventData } from '../utils/eventData';
import { BucketEvent } from '../components/BucketEvent/BucketEvent';
import { Container, Title, EmptyMessage, ContinueButton, EmptyStateImage } from './styles';
import { NavBar} from '../components/NavBar/NavBar';

const Bucket: React.FC = () => {
  const { bucketlist } = useBucketlist();
  const events = bucketlist.map((slug) => ({ slug, ...eventData[slug] }));

  const navigate = useNavigate();
  const handleFindEventsClick = () => {
    navigate('/home');
  };
  return (
    <Container>
      <Title>My Bucketlist</Title>
      {events.length === 0 ? (
        <>
        <EmptyStateImage src="/emptybucket.png" alt="Empty bucket" />
        <EmptyMessage>No events added yet.</EmptyMessage>
        <br></br>
        <ContinueButton onClick={handleFindEventsClick}>Explore events</ContinueButton>
      </>
      ) : (
        events.map((event) => (
          <BucketEvent
            key={event.slug}
            title={event.title}
            time={event.time}
            weekday={event.weekday}
            date={event.date}
            imageUrl={event.imageUrl}
            location={event.location}
            link={`/Bucket/${event.slug}`}
          />
        ))
      )}
    <br></br>
    <NavBar/>
    </Container>
  );
};

export default Bucket;
