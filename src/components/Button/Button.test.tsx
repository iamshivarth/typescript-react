import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Test Cases', () => {
  it('Correct Button Name', () => {
    render(<Button>Add</Button>);
    const addButton = screen.getByRole('button', {
      name: /add/i,
    });
    expect(addButton.textContent).toBe('Add');
  });
});
