import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Title,
  FormWrapper,
  ContinueButton,
  ButtonRow,
  BackButton
} from '../styles';
import { LabeledInput } from '../../components/LabeledInput/LabeledInput';

import styled from 'styled-components';

const EventBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 80px;
  width: calc(100% - 90px);
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 0.5rem;
  background-color: #f0f0f0;
  font-size: 0.85rem;
  line-height: 1.2;
`;

const EventTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const EventWith = styled.div`
  font-style: italic;
  color: #555;
`;

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const LOCAL_STORAGE_KEY = 'calendarEvents';

const convertTo24Hour = (time: string): number => {
  const trimmed = time.trim().toLowerCase();
  const timePattern = /^(\d{1,2})(am|pm)$/;
  const match = trimmed.match(timePattern);
  if (match) {
    let [, hourStr, period] = match;
    let hour = parseInt(hourStr, 10);
    if (period === 'pm' && hour !== 12) hour += 12;
    if (period === 'am' && hour === 12) hour = 0;
    return hour;
  }
  const numericHour = parseInt(trimmed, 10);
  if (!isNaN(numericHour) && numericHour >= 0 && numericHour <= 23) {
    return numericHour;
  }
  return 0;
};

const normalizeDay = (input: string): string => {
    const dayMapping: Record<string, string> = {
        m: 'Mon', mo: 'Mon', mon: 'Mon', monday: "Mon",
        tu: 'Tue', tue: 'Tue', tuesday: "Tue",
        w: 'Wed', we: 'Wed', wed: 'Wed', wednesday: "Wed",
        th: 'Thu', thu: 'Thu', thursday: 'Thu',
        f: 'Fri', fr: 'Fri', fri: 'Fri', friday: "Fri",
        sa: 'Sat', sat: 'Sat', saturday: 'Sat',
        su: 'Sun', sun: 'Sun', sunday: 'Sun'
    };
    const normalizedInput = input.trim().toLowerCase(); 
    return dayMapping[normalizedInput.slice(0, 3)] || input; 
};
  
type Event = {
  name: string;
  day: number;
  startHour: number;
  endHour: number;
  description: string;
  with: string;
};

const Week: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(new Date().getDay());
  const [events, setEvents] = useState<Record<number, Event[]>>({});
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    description: '',
    with: '',
    startTime: '',
    endTime: '',
    dayOfWeek: days[new Date().getDay()]
  });

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setEvents(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(events).length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(events));
    }
  }, [events]);

  const handleAddEvent = () => {
    const startHour = convertTo24Hour(form.startTime);
    const endHour = convertTo24Hour(form.endTime);

    const normalizedDay = normalizeDay(form.dayOfWeek);
    const dayIndex = days.indexOf(normalizedDay);

    if (dayIndex === -1) {
      alert('Invalid day of the week.');
      return;
    }

    const newEvent: Event = {
      name: form.name,
      description: form.description,
      with: form.with,
      startHour,
      endHour,
      day: dayIndex,
    };

    setEvents((prev) => ({
      ...prev,
      [newEvent.day]: [...(prev[newEvent.day] || []), newEvent],
    }));

    setForm({
      name: '',
      description: '',
      with: '',
      startTime: '',
      endTime: '',
      dayOfWeek: '',
    });
    setFormOpen(false);
  };

  const handleEditEvent = (event: Event) => {
    setSelectedEvent(event);
    setForm({
      name: event.name,
      description: event.description,
      with: event.with,
      startTime: event.startHour === 12 ? '12pm' : event.startHour < 12 ? `${event.startHour}am` : `${event.startHour - 12}pm`,
      endTime: event.endHour === 12 ? '12pm' : event.endHour < 12 ? `${event.endHour}am` : `${event.endHour - 12}pm`,
      dayOfWeek: days[event.day] || '', 
    });
    setFormOpen(true);
  
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleSaveEvent = () => {
    const normalizedDay = normalizeDay(form.dayOfWeek);
    const dayIndex = days.indexOf(normalizedDay);
  
    if (dayIndex === -1) {
        alert('Invalid day of the week.');
        return;
    }
  
    const updatedEvent = {
      ...selectedEvent!,
      name: form.name,
      description: form.description,
      with: form.with,
      startHour: convertTo24Hour(form.startTime),
      endHour: convertTo24Hour(form.endTime),
      day: dayIndex, 
    };
  
    setEvents((prev) => {
      const updatedEvents = { ...prev };
      updatedEvents[selectedEvent!.day] = updatedEvents[selectedEvent!.day].filter(
        (event) => event !== selectedEvent
      );
      updatedEvents[dayIndex] = [...(updatedEvents[dayIndex] || []), updatedEvent];
      return updatedEvents;
    });
  
    setSelectedEvent(null);
    setFormOpen(false);
  };

  const handleDeleteEvent = () => {
    if (!selectedEvent) return;
  
    setEvents((prev) => {
      const updatedEvents = { ...prev };
      updatedEvents[selectedEvent.day] = updatedEvents[selectedEvent.day].filter(
        (event) => event !== selectedEvent
      );
      return updatedEvents;
    });
  
    setSelectedEvent(null);
    setFormOpen(false);
  };

  return (
    <Container>
      <Title>My Events</Title>

      <ButtonRow style={{ justifyContent: 'center', marginBottom: '1rem' }}>
        {days.map((d, i: number) => (
          <button
            key={i}
            onClick={() => setSelectedDay(i)}
            style={{
              padding: '0.5rem 0.5rem',
              borderRadius: '6px',
              backgroundColor: i === selectedDay ? '#000' : '#fff',
              color: i === selectedDay ? '#fff' : '#000',
              border: '1px solid #000',
              cursor: 'pointer',
            }}
          >
            {d}
          </button>
        ))}
      </ButtonRow>

      <FormWrapper>
        <div style={{ border: '1px solid #ccc', width: '100%', borderRadius: '8px', padding: '1rem' }}>
          {[...Array(24)].map((_, hour) => (
            <div style={{ borderBottom: '1px solid #eee', padding: '0.5rem 0', position: 'relative' }}>
            <strong>{hour === 0 ? 12 : hour % 12 === 0 ? 12 : hour % 12}:00 {hour >= 12 ? 'PM' : 'AM'}</strong>
            {(events[selectedDay] || []).map((event, idx) => {
                if (event.startHour <= hour && event.endHour > hour) {
                    return (
                    <EventBox
                        key={idx}
                        style={{
                        top: `${(event.startHour - hour) * 40}px`,
                        height: `${(event.endHour - event.startHour) * 40}px`,
                        }}
                        onClick={() => handleEditEvent(event)}
                    >
                        <EventTitle>{event.name}</EventTitle>
                        <EventWith>With {event.with}</EventWith>
                    </EventBox>
                    );
                }
                return null; 
                })}
          </div>
          ))}
        </div>
      </FormWrapper>

      <ContinueButton
        style={{ marginTop: '2rem' }}
        onClick={() => {
            setForm({
            name: '',
            description: '',
            with: '',
            startTime: '',
            endTime: '',
            dayOfWeek: days[selectedDay],
            });
            setFormOpen(true);
        }}
        >
        Add Event
      </ContinueButton>

      {formOpen && (
        <FormWrapper ref={formRef} style={{ marginTop: '1rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '10px' }}>
          <h3>{selectedEvent ? 'Edit Event' : 'Add Event'}</h3>
          <LabeledInput
            label="Event Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Skydiving"
          />
          <LabeledInput
            label="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Bring your own parachute!"
            multiline={true}
          />
          <LabeledInput
            label="With"
            value={form.with}
            onChange={(e) => setForm({ ...form, with: e.target.value })}
            placeholder="Tyler"
          />
          <LabeledInput
            label="Start Time"
            value={form.startTime}
            onChange={(e) => setForm({ ...form, startTime: e.target.value })}
            placeholder="Enter start time (e.g., 2pm)"
          />
          <LabeledInput
            label="End Time"
            value={form.endTime}
            onChange={(e) => setForm({ ...form, endTime: e.target.value })}
            placeholder="Enter end time (e.g., 3pm)"
          />
          <LabeledInput
            label="Day of the Week"
            value={form.dayOfWeek}
            onChange={(e) => setForm({ ...form, dayOfWeek: e.target.value })}
            placeholder="Select day (e.g., Friday)"
          />

          <ButtonRow>
          <BackButton
            onClick={() => {
                setFormOpen(false);
                setForm({
                name: '',
                description: '',
                with: '',
                startTime: '',
                endTime: '',
                dayOfWeek: days[selectedDay],
                });
            }}
            >
            Cancel
          </BackButton>
            <ContinueButton onClick={selectedEvent ? handleSaveEvent : handleAddEvent}>
              {selectedEvent ? 'Save Changes' : 'Add Event'}
            </ContinueButton>
          </ButtonRow>
          {selectedEvent && (
            <ContinueButton
                style={{
                backgroundColor: '#f44336',
                marginTop: '1rem', 
                width: '100%',
                }}
                onClick={handleDeleteEvent}
            >
                Delete Event
            </ContinueButton>
            )}
        </FormWrapper>
      )}
    </Container>
  );
};

export default Week;
