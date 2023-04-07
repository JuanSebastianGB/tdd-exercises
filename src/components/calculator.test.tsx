import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Calculator, { operations } from './Calculator';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

describe('Calculator', () => {
  beforeEach(() => {
    render(<Calculator />);
  });
  afterEach(() => cleanup());
  test('should render calculator title', () => {
    screen.getByText(/calculator/i);
    expect(screen.queryByText(/calculator/i)).toBeDefined();
  });
  test('should render numbers', () =>
    numbers.map((num) => screen.getByText(num)));
  test('should render 4 rows', () => {
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(4);
  });
  test('should render operations', () =>
    operations.map((op) => screen.getByText(op)));
  test('should render = sign', () => screen.getByText('='));
  test('should render an input', () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeDefined();
  });
  test('should fill input after clicking several numbers', () => {
    const input = screen.getByRole('textbox');
    fireEvent.click(screen.getByText(1));
    fireEvent.click(screen.getByText(2));
    fireEvent.click(screen.getByText(3));
    expect(input.value).toBe('123');
  });
  test('should fill input after clicking several number(s) and + and number(s)', () => {
    const input = screen.getByRole('textbox');
    fireEvent.click(screen.getByText(1));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText(3));
    expect(input.value).toBe('1+3');
  });
  test('should calculate the result after clicking =', () => {
    const input = screen.getByRole('textbox');
    fireEvent.click(screen.getByText(2));
    fireEvent.click(screen.getByText(0));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText(3));
    fireEvent.click(screen.getByText(5));
    fireEvent.click(screen.getByText('='));
    expect(input.value).toBe('55');
  });
  test('should be able to set a new number after a given result', () => {
    const input = screen.getByRole('textbox');
    fireEvent.click(screen.getByText(2));
    fireEvent.click(screen.getByText(0));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText(1));
    fireEvent.click(screen.getByText('='));

    fireEvent.click(screen.getByText(3));

    expect(input.value).toBe('3');
  });
});
