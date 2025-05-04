import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LabeledInput } from '../../components/LabeledInput/LabeledInput';
import { ContinueButton, Container } from '../styles';
import { DropdownSelect } from '../../components/DropdownSelect/DropdownSelect';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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

const Add = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    description: '',
    with: '',
    startHour: '',
    endHour: '',
    dayOfWeek: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddEvent = () => {
    const startHour = convertTo24Hour(form.startHour);
    const endHour = convertTo24Hour(form.endHour);
    const dayIndex = days.indexOf(form.dayOfWeek);

    if (dayIndex === -1) {
      alert('Invalid day');
      return;
    }

    if (isNaN(startHour) || isNaN(endHour)) {
      alert('Invalid time input');
      return;
    }

    const newEvent = { ...form, startHour, endHour, day: dayIndex };
    const stored = JSON.parse(localStorage.getItem('calendarEvents') || '{}');

    stored[dayIndex] = [...(stored[dayIndex] || []), newEvent];
    localStorage.setItem('calendarEvents', JSON.stringify(stored));
    navigate('/calendar/upcoming');
  };

  const handleCancel = () => {
    navigate('/calendar/upcoming');
  };

  return (
    <Container>
      <h1>Add New Event</h1>
      <LabeledInput
        label="Event Name"
        value={form.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
      />
      <LabeledInput
        label="Description"
        value={form.description}
        onChange={(e) => handleInputChange('description', e.target.value)}
      />
      <LabeledInput
        label="With"
        value={form.with}
        onChange={(e) => handleInputChange('with', e.target.value)}
      />

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
        label="Start Hour (e.g., 9am, 2pm)"
        value={form.startHour}
        onChange={(e) => handleInputChange('startHour', e.target.value)}
      />
      <LabeledInput
        label="End Hour (e.g., 9am, 2pm)"
        value={form.endHour}
        onChange={(e) => handleInputChange('endHour', e.target.value)}
      />
      <ContinueButton onClick={handleAddEvent}>
        Save Event
      </ContinueButton>
      <ContinueButton
              style={{
                backgroundColor: '#f44336',
                marginTop: '1.5rem',
                width: '350px',
                maxWidth: '100%',   
              }}
              onClick={handleCancel}
            >
              Cancel
      </ContinueButton>
    </Container>
  );
};

export default Add;
