import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
  test('affiche le titre et le paragraphe', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument();
    expect(screen.getByText(/marvel fans/i)).toBeInTheDocument();
  });

  test('le titre de la page est correct', () => {
    render(<AboutPage />);
    expect(document.title).toBe('About | Marvel App');
  });
});
