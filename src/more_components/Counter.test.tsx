import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

it.concurrent('', () => {
  render(<Counter />);
  const buttonElement = screen.getByText(/Add one/i);
  const divElement = screen.getByRole('contentinfo');
  expect(divElement.textContent).toBe('Count is 0');
  fireEvent.click(buttonElement);
  expect(divElement.textContent).toBe('Count is 1');
  fireEvent.click(buttonElement);
  expect(divElement.textContent).toBe('Count is 2');
  for (let i = 0; i < 10; i++) {
    fireEvent.click(buttonElement);
  }
  expect(divElement.textContent).toBe('Count is 12');
});
