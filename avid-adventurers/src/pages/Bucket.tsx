import React from 'react';
import { useBucketlist } from '../utils/bucketlistContext';
import { eventData } from '../utils/eventData';
import { BucketEvent } from '../components/BucketEvent/BucketEvent';
import { Container, Title } from './styles';
import { NavBar} from '../components/NavBar/NavBar';

const Bucket: React.FC = () => {
  const { bucketlist } = useBucketlist();
  const events = bucketlist.map((slug) => ({ slug, ...eventData[slug] }));

  return (
    <Container>
      <Title>My Bucketlist</Title>
      {events.length === 0 ? (
        <p>No events added yet.</p>
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
            link={`/events/${event.slug}`}
          />
        ))
      )}
    <br></br>
    <NavBar/>
    </Container>
  );
};

export default Bucket;
