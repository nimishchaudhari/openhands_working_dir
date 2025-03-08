import React, { useState } from 'react';
import NumberInput from './NumberInput';
import SelectInput from './SelectInput';
import WindowVisualization from './WindowVisualization';

const WindowConfigurator: React.FC = () => {
  const [xSize, setXSize] = useState<number>(1000); // Default 1000mm
  const [ySize, setYSize] = useState<number>(1000);
  const [color, setColor] = useState<string>('White');
  const [type, setType] = useState<string>('Casement');

  return (
    <div className="configurator">
      <h1>Window Configurator</h1>
      <div className="inputs">
        <NumberInput label="Width (mm)" value={xSize} onChange={setXSize} min={100} max={2000} />
        <NumberInput label="Height (mm)" value={ySize} onChange={setYSize} min={100} max={2000} />
        <SelectInput
          label="Color"
          value={color}
          onChange={setColor}
          options={['White', 'Black', 'Brown', 'Gray']}
        />
        <SelectInput
          label="Type"
          value={type}
          onChange={setType}
          options={['Casement', 'Sliding', 'Double-Hung', 'Fixed']}
        />
      </div>
      <div className="visualization">
        <WindowVisualization xSize={xSize} ySize={ySize} color={color} type={type} />
      </div>
    </div>
  );
};

export default WindowConfigurator;
