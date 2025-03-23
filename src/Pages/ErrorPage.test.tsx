
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorPage from './ErrorPage';

test('renders the input field', () => {
  render(<ErrorPage />);

  const linkToGoBack = screen.getByText('Teleport back!');

  expect(linkToGoBack).toBeInTheDocument();
});

