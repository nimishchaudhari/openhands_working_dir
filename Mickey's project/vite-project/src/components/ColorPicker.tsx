import React, { useState } from 'react';

interface ColorPickerProps {
  setColor: (color: string) => void;
}

function ColorPicker({ setColor }: ColorPickerProps) {
  const [color, setColorState] = useState('#ffffff');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColorState(event.target.value);
    setColor(event.target.value);
  };

  return (

      <h3>Color Picker</h3>
      <label>
        Color:
        <input
          type="color"
          value={color}
          onChange={handleChange}
        />
      </label>

  );
}

export default ColorPicker;
