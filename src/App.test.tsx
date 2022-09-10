import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App test cases', () => {
  it('Successful user submission', async () => {
    render(<App />);
    const addUserButton = screen.getByRole('button', {
      name: /add user/i,
    });
    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const ageInput = screen.getByRole('spinbutton', { name: /age/i });

    fireEvent.change(nameInput, { target: { value: 'something' } });
    fireEvent.change(ageInput, { target: { value: '1' } });
    fireEvent.click(addUserButton);

    const users = await screen.findAllByText(/something/i);
    expect(users).toHaveLength(1);
  });
});
