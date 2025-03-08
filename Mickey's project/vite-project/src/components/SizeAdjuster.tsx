import React from 'react';

interface SizeAdjusterProps {
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
}

function SizeAdjuster({ setWidth, setHeight }: SizeAdjusterProps) {
  return (
    
      <h3>Size Adjuster</h3>
      <label>
        Width:
        <input
          type="number"
          defaultValue={200}
          onChange={(e) => setWidth(parseInt(e.target.value))}
        />
      </label>
      <label>
        Height:
        <input
          type="number"
          defaultValue={300}
          onChange={(e) => setHeight(parseInt(e.target.value))}
        />
      </label>
    
  );
}

export default SizeAdjuster;