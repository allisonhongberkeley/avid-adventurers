import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LabeledInput } from '../../components/LabeledInput/LabeledInput';
import { ContinueButton, Container } from '../styles';
import { DropdownSelect } from '../../components/DropdownSelect/DropdownSelect';

type Event = {
  name: string;
  description: string;
  with: string;
  startTime: string; /* hh:mm */
  day: number;
  imageUrl: string;
};

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Edit = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    description: '',
    with: '',
    startTime: '',
    dayOfWeek: '',
    imageUrl: '',
  });

  useEffect(() => {
    const storedEvent = JSON.parse(localStorage.getItem('eventToEdit') || 'null');
    if (storedEvent) {
      setForm({
        name: storedEvent.name,
        description: storedEvent.description,
        with: storedEvent.with,
        startTime: storedEvent.startTime,
        dayOfWeek: days[storedEvent.day],
        imageUrl: storedEvent.imageUrl || '',
      });
    }
  }, []);

  const parseHour = (time: string): number => {
    const [hourStr] = time.split(':');
    return parseInt(hourStr, 10);
  };

  const handleAddEvent = () => {
    const dayIndex = days.indexOf(form.dayOfWeek);
  
    if (dayIndex === -1 || !form.startTime) {
      alert('Invalid input');
      return;
    }
  
    const updatedEvent: Event = {
      name: form.name,
      description: form.description,
      with: form.with,
      startTime: form.startTime,
      day: dayIndex,
      imageUrl: form.imageUrl,
    };
  
    const original: Event = JSON.parse(localStorage.getItem('originalEvent') || '{}');
    const stored: { [key: number]: Event[] } = JSON.parse(localStorage.getItem('calendarEvents') || '{}');
  
    stored[original.day] = (stored[original.day] || []).filter((event: Event) =>
      !(
        event.name === original.name &&
        event.startTime === original.startTime &&
        event.day === original.day
      )
    );
  
    if (!stored[dayIndex]) stored[dayIndex] = [];
    stored[dayIndex].push(updatedEvent);
  
    localStorage.setItem('calendarEvents', JSON.stringify(stored));
    localStorage.removeItem('eventToEdit');
    localStorage.removeItem('originalEvent');
    navigate('/calendar/upcoming');
  };
  

  const handleDeleteEvent = () => {
    const original: Event = JSON.parse(localStorage.getItem('originalEvent') || '{}');
    const stored: { [key: number]: Event[] } = JSON.parse(localStorage.getItem('calendarEvents') || '{}');
  
    stored[original.day] = (stored[original.day] || []).filter((event: Event) =>
      !(
        event.name === original.name &&
        event.startTime === original.startTime &&
        event.day === original.day
      )
    );
  
    localStorage.setItem('calendarEvents', JSON.stringify(stored));
  
    const past: Event[] = JSON.parse(localStorage.getItem('pastEvents') || '[]');
    const updatedPast = past.filter((event: Event) =>
      !(
        event.name === original.name &&
        event.startTime === original.startTime &&
        event.day === original.day
      )
    );
    localStorage.setItem('pastEvents', JSON.stringify(updatedPast));
  
    localStorage.removeItem('eventToEdit');
    localStorage.removeItem('originalEvent');
  
    navigate('/calendar/upcoming');
  };
  

  return (
    <Container>
      <h1>Edit Event</h1>
      <LabeledInput label="Event Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <LabeledInput label="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <LabeledInput label="With" value={form.with} onChange={(e) => setForm({ ...form, with: e.target.value })} />
      
      <div style={{ width: '350px', maxWidth: '100%' }}>
        <DropdownSelect
        label="Day of Week"
        options={days}
        selected={form.dayOfWeek}
        setSelected={(day) =>
            setForm((prev) => ({
            ...prev,
            dayOfWeek: typeof day === 'function' ? day(prev.dayOfWeek) : day,
            }))
        }
        />
      </div>

      <LabeledInput
        label="Start Time"
        type="time"
        value={form.startTime}
        onChange={(e) => setForm({ ...form, startTime: e.target.value })}
      />
      <ContinueButton onClick={handleAddEvent}>Save Event</ContinueButton>

      <ContinueButton
        style={{
          backgroundColor: '#f44336',
          marginTop: '1rem',
          width: '350px',
          maxWidth: '100%',
        }}
        onClick={handleDeleteEvent}
      >
        Delete Event
      </ContinueButton>
    </Container>
  );
};

export default Edit;
