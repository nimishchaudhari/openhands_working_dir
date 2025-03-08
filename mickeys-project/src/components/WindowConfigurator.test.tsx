import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WindowConfigurator from './WindowConfigurator';

describe('WindowConfigurator', () => {
  test('renders the component', () => {
    render(<WindowConfigurator />);
    expect(screen.getByText('Window Configurator')).toBeInTheDocument();
  });

  test('updates width when input changes', () => {
    render(<WindowConfigurator />);
    const widthInput = screen.getByLabelText('Width (mm)');
    fireEvent.change(widthInput, { target: { value: '1500' } });
    expect((widthInput as HTMLInputElement).value).toBe('1500');
  });

  test('updates height when input changes', () => {
    render(<WindowConfigurator />);
    const heightInput = screen.getByLabelText('Height (mm)');
    fireEvent.change(heightInput, { target: { value: '1200' } });
    expect((heightInput as HTMLInputElement).value).toBe('1200');
  });

  test('updates color when select changes', () => {
    render(<WindowConfigurator />);
    const colorSelect = screen.getByLabelText('Color');
    fireEvent.change(colorSelect, { target: { value: 'Brown' } });
    expect((colorSelect as HTMLSelectElement).value).toBe('Brown');
  });

  test('updates type when select changes', () => {
    render(<WindowConfigurator />);
    const typeSelect = screen.getByLabelText('Type');
    fireEvent.change(typeSelect, { target: { value: 'Sliding' } });
    expect((typeSelect as HTMLSelectElement).value).toBe('Sliding');
  });
});
