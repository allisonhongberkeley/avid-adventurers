import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventBox } from '../../components/EventBox/EventBox';
import { ContinueButton, BackButton, Container } from '../styles';
import { NavBar } from '../../components/NavBar/NavBar';

type Event = {
  name: string;
  with: string;
  startTime: string;
  description: string;
  day: number;
  imageUrl: string;
};

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getNextDate(dayOfWeek: number): string {
  const today = new Date();
  const currentDay = today.getDay();

  let daysToAdd = (dayOfWeek - currentDay + 7) % 7;
  if (daysToAdd === 0) daysToAdd = 7;

  const nextDate = new Date(today);
  nextDate.setDate(today.getDate() + daysToAdd);

  return nextDate.toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
  });
}

function formatTime(time: string): string {
  const [hourStr, minuteStr] = time.split(':');
  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  const formattedMinute = minute.toString().padStart(2, '0');
  return `${formattedHour}:${formattedMinute} ${ampm}`;
}


const Upcoming = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [buttonVisible, setButtonVisible] = useState<{ [key: string]: boolean }>({});
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('calendarEvents') || '{}');
    const allEvents: Event[] = Object.entries(stored).flatMap(([dayStr, dayEvents]) =>
      (dayEvents as Event[]).map(event => ({
        ...event,
        day: parseInt(dayStr, 10),
      }))
    );

    allEvents.sort((a, b) =>
      a.day !== b.day ? a.day - b.day : a.startTime.localeCompare(b.startTime)
    );
    setEvents(allEvents);
    console.log(allEvents);
  }, []);

  useEffect(() => {
    events.forEach((event) => {
      const eventKey = `${event.name}-${event.startTime}`;
      setButtonVisible((prevState) => ({
        ...prevState,
        [eventKey]: false,
      }));

      setTimeout(() => {
        setButtonVisible((prevState) => ({
          ...prevState,
          [eventKey]: true,
        }));
      }, 10000);
    });
  }, [events]);

  const handleAdd = () => {
    navigate('/calendar/add');
  };

  const handleEdit = (event: Event) => {
    localStorage.setItem('eventToEdit', JSON.stringify(event));
    localStorage.setItem('originalEvent', JSON.stringify(event));
    navigate('/calendar/edit');
  };

  const handleWeMetClick = (event: Event, e: React.MouseEvent) => {
    e.stopPropagation();
    const stored = JSON.parse(localStorage.getItem('calendarEvents') || '{}');
    const updatedStored = { ...stored };
    const dayStr = event.day.toString();
    updatedStored[dayStr] = (updatedStored[dayStr] || []).filter((e: Event) => e.name !== event.name || e.startTime !== event.startTime);
    localStorage.setItem('calendarEvents', JSON.stringify(updatedStored));
    const pastEvents = JSON.parse(localStorage.getItem('pastEvents') || '[]');
    pastEvents.push(event);
    localStorage.setItem('pastEvents', JSON.stringify(pastEvents));
    setEvents((prevEvents) => {
      return prevEvents.filter((e) => e !== event);
    });
    navigate('/survey/congrats');
  };

  return (
    <Container>
      <h1 className="text-xl font-bold mb-4">Upcoming Events</h1>
      {events.map((event, index) => {
        const eventKey = `${event.name}-${event.startTime}`;
        return (
          <div
            key={`${event.name}-${event.startTime}-${index}`}
            style={{ marginBottom: '16px' }}
            onClick={() => handleEdit(event)}
          >
            <EventBox
              time={`${formatTime(event.startTime)}`}
              weekday={days[event.day]}
              date={getNextDate(event.day)}
              title={event.name}
              location={`with ${event.with}`}
              imageUrl={event.imageUrl}
              link="#"
            />
            {buttonVisible[eventKey] && (
              <BackButton
                onClick={(e) => handleWeMetClick(event, e)}
                style={{ marginTop: '4px', padding: '4px' }}
              >
                We Met!
              </BackButton>
            )}
          </div>
        );
      })}

      <ContinueButton onClick={handleAdd}>Add Event</ContinueButton>

      <h1 className="text-lg font-semibold mt-8 mb-2">Past Events</h1>
      <div style={{ marginBottom: '16px' }}>
        <EventBox
          time="5AM"
          weekday="Monday"
          date="May 5"
          title="Sunrise Picnic at GGP"
          location="with Alice"
          imageUrl={`https://noggin.rea.gent/puzzled-duck-3240?key=rg_v1_c9ixtwk8a5nxk68ybfkp4y5g42dndjehnvrz_ngk&image=${'Sunrise Picnic at GGP'}`}
          link="#"
        />
      </div>
      {JSON.parse(localStorage.getItem('pastEvents') || '[]').map((event: Event, index: number) => (
        <div
            key={`${event.name}-${event.startTime}-${index}`}
            style={{ marginBottom: '16px', cursor: 'pointer' }}
            onClick={() => handleEdit(event)}
        >
            <EventBox
            time={`${formatTime(event.startTime)}`}
            weekday={days[event.day]}
            date={getNextDate(event.day)}
            title={event.name}
            location={`with ${event.with}`}
            imageUrl={event.imageUrl}
            link="#"
            />
        </div>
        ))}

    <NavBar />
    </Container>
  );
};

export default Upcoming;
