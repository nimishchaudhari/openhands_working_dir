import React from 'react';

interface WindowVisualizationProps {
  width: number;
  height: number;
  color: string;
  type: string;
}

function WindowVisualization({ width, height, color, type }: WindowVisualizationProps) {
  const borderStyle = type === 'double' ? '3px double black' : '1px solid black';

  return (
    
      <h3>Window Visualization</h3>
      <div style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
        border: borderStyle,
      }}></div>
    
  );
}

export default WindowVisualization;