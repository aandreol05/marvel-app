import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  test('affiche le message 404', () => {
    render(<NotFoundPage />);
    expect(screen.getByRole('heading', { level: 2, name: '404 - Page Not Found' })).toBeInTheDocument();
    expect(screen.getByText('The page you are looking for does not exist.')).toBeInTheDocument();
  });

  test('le titre de la page est correct', () => {
    render(<NotFoundPage />);
    expect(document.title).toBe('404 - Page Not Found');
  });
});
