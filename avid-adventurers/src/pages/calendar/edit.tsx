import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LabeledInput } from '../../components/LabeledInput/LabeledInput';
import { ContinueButton, Container } from '../styles';
import { DropdownSelect } from '../../components/DropdownSelect/DropdownSelect';

type Event = {
  name: string;
  description: string;
  with: string;
  startHour: number;
  endHour: number;
  day: number;
};

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const convertTo12Hour = (hour: number): string => {
  const period = hour >= 12 ? 'pm' : 'am';
  let formattedHour = hour % 12;
  formattedHour = formattedHour === 0 ? 12 : formattedHour;
  return `${formattedHour}${period}`;
};

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

const Edit = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    description: '',
    with: '',
    startHour: '',
    endHour: '',
    dayOfWeek: '',
  });

  useEffect(() => {
    const storedEvent = JSON.parse(localStorage.getItem('eventToEdit') || 'null');
    if (storedEvent) {
      setForm({
        name: storedEvent.name,
        description: storedEvent.description,
        with: storedEvent.with,
        startHour: convertTo12Hour(storedEvent.startHour),
        endHour: convertTo12Hour(storedEvent.endHour),
        dayOfWeek: days[storedEvent.day],
      });
    }
  }, []);

  const handleAddEvent = () => {
    const startHour = convertTo24Hour(form.startHour);
    const endHour = convertTo24Hour(form.endHour);
    const dayIndex = days.indexOf(form.dayOfWeek);

    if (dayIndex === -1) {
      alert('Invalid day');
      return;
    }

    const updatedEvent: Event = {
      name: form.name,
      description: form.description,
      with: form.with,
      startHour,
      endHour,
      day: dayIndex,
    };

    const original: Event = JSON.parse(localStorage.getItem('originalEvent') || '{}');
    const stored: { [key: number]: Event[] } = JSON.parse(localStorage.getItem('calendarEvents') || '{}');

    stored[original.day] = (stored[original.day] || []).filter((event: Event) =>
      !(
        event.name === original.name &&
        event.startHour === original.startHour &&
        event.endHour === original.endHour &&
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
        event.startHour === original.startHour &&
        event.endHour === original.endHour &&
        event.day === original.day
      )
    );

    localStorage.setItem('calendarEvents', JSON.stringify(stored));

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

      <LabeledInput label="Start Hour (e.g., 9am, 2pm)" value={form.startHour} onChange={(e) => setForm({ ...form, startHour: e.target.value })} />
      <LabeledInput label="End Hour (e.g., 9am, 2pm)" value={form.endHour} onChange={(e) => setForm({ ...form, endHour: e.target.value })} />
      
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
