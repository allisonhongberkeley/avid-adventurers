import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LabeledInput } from '../../components/LabeledInput/LabeledInput';
import { ContinueButton, Container } from '../styles';
import { DropdownSelect } from '../../components/DropdownSelect/DropdownSelect';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Add = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as {
    eventName?: string;
    day?: string;
    contactName?: string;
    startTime?: string;
  };
  const [form, setForm] = useState({
    name: state?.eventName || '',
    description: '',
    with: state?.contactName || '',
    startTime: state?.startTime || '',
    dayOfWeek: state?.day || '',
  });

  const handleInputChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    console.log(form.startTime);
  };
  
  const handleAddEvent = async () => {
    const startTime = form.startTime;
    const dayIndex = days.indexOf(form.dayOfWeek);
    const imageUrl = `https://noggin.rea.gent/puzzled-duck-3240?key=rg_v1_c9ixtwk8a5nxk68ybfkp4y5g42dndjehnvrz_ngk&image=${encodeURIComponent(form.name)}`;
  
    if (dayIndex === -1 || !startTime) {
      alert('Invalid input');
      return;
    }
  
    const newEvent = {
      name: form.name,
      description: form.description,
      with: form.with,
      startTime: form.startTime,
      day: dayIndex,
      imageUrl: imageUrl,
    };
  
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

      <div style={{ width: '100%', maxWidth: '350px' }}>
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
        onChange={(e) => handleInputChange('startTime', e.target.value)}
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
