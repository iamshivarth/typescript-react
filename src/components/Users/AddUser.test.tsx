import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';

describe('User Test Cases', () => {
  it('Initial Conditions', () => {
    render(<App />);
    const addUserButton = screen.getByRole('button', {
      name: /add user/i,
    });
    expect(addUserButton).toBeInTheDocument();
    const nameInput = screen.getByRole('textbox', { name: /name/i });
    expect(nameInput).toBeInTheDocument();
    const ageInput = screen.getByRole('spinbutton', { name: /age/i });
    expect(ageInput).toBeInTheDocument();
  });

  it('Input fields are empty after successful user submission', async () => {
    render(<App />);
    const addUserButton = screen.getByRole('button', {
      name: /add user/i,
    });
    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const ageInput = screen.getByRole('spinbutton', { name: /age/i });

    fireEvent.change(nameInput, { target: { value: 'something' } });
    fireEvent.change(ageInput, { target: { value: '1' } });
    fireEvent.click(addUserButton);

    expect(nameInput.textContent).toBe('');
    expect(ageInput.textContent).toBe('');
  });
});
