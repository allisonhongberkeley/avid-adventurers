import React from 'react';
import { Input, Label, Wrapper, TextArea } from './styles';

interface LabeledInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  placeholder?: string;
  multiline?: boolean; // ✅ Add this prop
}

export const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  multiline = false, // ✅ Default to false
}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      {multiline ? (
        <TextArea value={value} onChange={onChange} placeholder={placeholder} rows={3} />
      ) : (
        <Input type={type} value={value} onChange={onChange} placeholder={placeholder} />
      )}
    </Wrapper>
  );
};