import { fireEvent, render, screen } from '@testing-library/react';
import Accordion from './Accordion';

describe('Accordion', () => {
  beforeEach(() => {
    render(<Accordion title="hello">Content</Accordion>);
  });
  test('should show title all time', () => {
    expect(screen.getByText('hello')).toBeDefined();
  });
  test('should not show content by default', () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  });
  test('should show content when open', () => {
    fireEvent.click(screen.getByText(/open/i));
    expect(screen.queryByText(/content/i)).toBeDefined();
  });
  test('should hide content when close', () => {
    fireEvent.click(screen.getByText(/open/i));
    fireEvent.click(screen.getByText(/close/i));
    expect(screen.queryByText(/content/i)).toBeNull();
  });
});
