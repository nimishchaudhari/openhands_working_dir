import React from 'react';

interface WindowVisualizationProps {
  xSize: number;
  ySize: number;
  color: string;
  type: string;
}

const WindowVisualization: React.FC<WindowVisualizationProps> = ({ xSize, ySize, color, type }) => {
  const scale = 0.1; // Scale factor: 1000mm becomes 100px
  const width = xSize * scale;
  const height = ySize * scale;

  return (
    <div className="visualization-container">
      <div
        className="window-frame"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          border: '5px solid black',
          position: 'relative',
          backgroundColor: color.toLowerCase(),
        }}
      >
        {type === 'Casement' && (
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'black',
            }}
          />
        )}
        {type === 'Sliding' && (
          <>
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '2px',
                backgroundColor: 'black',
              }}
            />
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: '2px',
                backgroundColor: 'black',
              }}
            />
          </>
        )}
        {type === 'Double-Hung' && (
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: '50%',
              height: '2px',
              backgroundColor: 'black',
            }}
          />
        )}
        {/* Fixed type has no additional lines */}
      </div>
      <p>Width: {xSize}mm, Height: {ySize}mm, Color: {color}, Type: {type}</p>
    </div>
  );
};

export default WindowVisualization;
