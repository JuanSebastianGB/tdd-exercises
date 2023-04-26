import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import ButtonWrapper from './ButtonWrapper';

it.concurrent('handles onClick', () => {
  const onClick = vi.fn();
  render(<ButtonWrapper onClick={onClick} title="Add Item" />);
  const buttonElement = screen.getByText(/Add Item/i);
  expect(buttonElement).toBeDefined();
  expect(onClick).not.toBeCalled();

  fireEvent.click(buttonElement);

  expect(onClick).toBeCalled();
  expect(onClick).toBeCalledTimes(1);
});
