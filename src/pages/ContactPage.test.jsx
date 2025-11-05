import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

describe('ContactPage', () => {
  test('affiche le titre et l\'adresse email', () => {
    render(<ContactPage />);
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument();
    expect(screen.getByText(/marvelApp@gmail.com/i)).toBeInTheDocument();
  });

  test('le titre de la page est correct', () => {
    render(<ContactPage />);
    expect(document.title).toBe('Contact | Marvel App');
  });
});
