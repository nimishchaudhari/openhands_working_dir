import React from 'react';

interface NumberInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const NumberInput: React.FC<NumberInputProps> = ({ label, value, onChange, min, max }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
      />
    </div>
  );
};

export default NumberInput;
