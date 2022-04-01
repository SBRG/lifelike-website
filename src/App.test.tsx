import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders app', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const elements = screen.getAllByText(/lifelike/i);
  expect(elements.length).toBeGreaterThan(0);
  expect(elements[0]).toBeInTheDocument();
});
