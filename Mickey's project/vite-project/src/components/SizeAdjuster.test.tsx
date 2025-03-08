import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import SizeAdjuster from './SizeAdjuster';

describe('SizeAdjuster', () => {
  it('should update width when input value changes', () => {
    const setWidth = jest.fn();
    const setHeight = jest.fn();
    render(<SizeAdjuster setWidth={setWidth} setHeight={setHeight} />);

    const widthInput = screen.getByLabelText('Width:') as HTMLInputElement;
    fireEvent.change(widthInput, { target: { value: '300' } });

    expect(setWidth).toHaveBeenCalledWith(300);
  });

  it('should update height when input value changes', () => {
    const setWidth = jest.fn();
    const setHeight = jest.fn();
    render(<SizeAdjuster setWidth={setWidth} setHeight={setHeight} />);

    const heightInput = screen.getByLabelText('Height:') as HTMLInputElement;
    fireEvent.change(heightInput, { target: { value: '400' } });

    expect(setHeight).toHaveBeenCalledWith(400);
  });
});
