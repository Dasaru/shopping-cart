import { render, screen } from '@testing-library/react';

import App from './App';

describe('App component', () => {
  it('renders correct headline', () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/hello world/i);
  });
});