import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('Button Test Cases', () => {
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
});
