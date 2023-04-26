import { render, screen } from '@testing-library/react';
import Person from './Person';

it.concurrent('Renders a name', () => {
  render(<Person name="sebastian" />);
  screen.getByText(/sebastian/i);
  screen.getByRole('contentinfo');

  const divElement = screen.queryByRole('contentinfo');
  expect(divElement).not.toBeUndefined();
});
