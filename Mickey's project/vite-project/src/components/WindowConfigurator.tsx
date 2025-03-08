import React, { useState } from 'react';
import SizeAdjuster from './SizeAdjuster';
import ColorPicker from './ColorPicker';
import TypeSelector from './TypeSelector';
import WindowVisualization from './WindowVisualization';

function WindowConfigurator() {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(300);
  const [color, setColor] = useState('#ffffff');
  const [type, setType] = useState('single');

  return (

      <h2>Window Configurator</h2>
      <SizeAdjuster setWidth={setWidth} setHeight={setHeight} />
      <ColorPicker setColor={setColor} />
      <TypeSelector setType={setType} />
      <WindowVisualization width={width} height={height} color={color} type={type} />

  );
}

export default WindowConfigurator;
