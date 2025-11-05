import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CharacterDetailPage from './CharacterDetailPage';
import { useLoaderData } from 'react-router';

jest.mock('react-router', () => ({
  useLoaderData: jest.fn(),
}));

jest.mock('../components/CharacterDetail', () => (props) => (
  <div data-testid="character-detail">{props.character.name}</div>
));

describe('CharacterDetailPage', () => {
  test('affiche les détails du personnage', () => {
    useLoaderData.mockReturnValue({ name: 'Beast', id: '1009175' });
    render(<CharacterDetailPage />);
    expect(screen.getByRole('heading', { level: 2, name: 'Marvel Character Detail' })).toBeInTheDocument();
    expect(screen.getByTestId('character-detail')).toHaveTextContent('Beast');
  });

  test('le titre de la page est correct', () => {
    useLoaderData.mockReturnValue({ name: 'Beast', id: '1009175' });
    render(<CharacterDetailPage />);
    expect(document.title).toBe('Beast | Marvel App');
  });
});
