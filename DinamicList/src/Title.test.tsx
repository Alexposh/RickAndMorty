import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from './Title';

test('renders the title', () => {
  render(<Title />);

  expect(screen.getByText('Technical Test for Frontend Developer')).toBeInTheDocument();
});