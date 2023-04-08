import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it.concurrent('should render', () => {
    render(<Form />);
  });
  it.concurrent('should have a username field', () => {
    render(<Form />);
    screen.getByLabelText(/username/i);
  });
  it.concurrent('should have a password field', () => {
    render(<Form />);
    screen.getByLabelText(/password/i);
  });
  it.concurrent('should have a submit bottom', () => {
    render(<Form />);
    screen.getByText(/login/i);
  });
  it.concurrent('should allow the user to submit their credentials', () => {
    const submit = vi.fn();
    render(<Form submit={submit} />);

    const username = screen.getByLabelText(/username/i);
    const password = screen.getByLabelText(/password/i);
    const submitButton = screen.getByText(/login/i);

    fireEvent.change(username, { target: { value: 'testUsername' } });
    fireEvent.change(password, { target: { value: '123456789' } });
    fireEvent.click(submitButton);

    expect(submit).toHaveBeenCalledWith({
      username: 'testUsername',
      password: '123456789',
    });
  });
});
