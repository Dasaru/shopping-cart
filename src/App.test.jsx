import { render, screen } from '@testing-library/react';

import App from './App';

describe('App component', () => {
  it('renders correct product link', () => {
    render(<App />);
    expect(screen.getAllByRole("link")[0].textContent).toMatch(/products/i);
  });
});