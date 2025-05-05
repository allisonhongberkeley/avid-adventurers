import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LabeledInput } from '../../components/LabeledInput/LabeledInput';
import { ContinueButton, Container } from '../styles';
import { DropdownSelect } from '../../components/DropdownSelect/DropdownSelect';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Add = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    description: '',
    with: '',
    startTime: '',
    endTime: '',
    dayOfWeek: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };
  
  const handleAddEvent = async () => {
    const startTime = form.startTime;
    const endTime = form.endTime;
    const dayIndex = days.indexOf(form.dayOfWeek);
    const imageUrl = `https://noggin.rea.gent/puzzled-duck-3240?key=rg_v1_c9ixtwk8a5nxk68ybfkp4y5g42dndjehnvrz_ngk&image=${encodeURIComponent(form.name)}`;
  
    if (dayIndex === -1 || !startTime || !endTime) {
      alert('Invalid input');
      return;
    }
  
    const newEvent = {
      name: form.name,
      description: form.description,
      with: form.with,
      startTime: form.startTime,
      endTime: form.endTime,
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
        onChange={(e) => handleInputChange('startTime', e.target.value)}
      />
      <LabeledInput
        label="End Time"
        type="time"
        value={form.endTime}
        onChange={(e) => handleInputChange('endTime', e.target.value)}
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
