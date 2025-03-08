import React, { useState } from 'react';

interface TypeSelectorProps {
  setType: (type: string) => void;
}

function TypeSelector({ setType }: TypeSelectorProps) {
  const [type, setTypeState] = useState('single');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeState(event.target.value);
    setType(event.target.value);
  };

  return (
    
      <h3>Type Selector</h3>
      <label>
        Window Type:
        <select value={type} onChange={handleChange}>
          <option value="single">Single Pane</option>
          <option value="double">Double Pane</option>
        </select>
      </label>
    
  );
}

export default TypeSelector;