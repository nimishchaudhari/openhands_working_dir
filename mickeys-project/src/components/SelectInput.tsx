import React from 'react';

interface SelectInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const SelectInput: React.FC<SelectInputProps> = ({ label, value, onChange, options }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="input-group">
      <label>{label}</label>
      <select value={value} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
