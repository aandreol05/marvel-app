import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CharactersList from './CharactersList';
import { MemoryRouter } from 'react-router';

describe('CharactersList', () => {
  test('affiche la liste des personnages avec liens', () => {
    const characters = [
      { id: '1', name: 'Beast' },
      { id: '2', name: 'Deadpool' }
    ];
    render(
      <MemoryRouter>
        <CharactersList characters={characters} />
      </MemoryRouter>
    );
    expect(screen.getByText('Beast')).toBeInTheDocument();
    expect(screen.getByText('Deadpool')).toBeInTheDocument();
    expect(screen.getAllByRole('link').length).toBe(2);
    expect(screen.getByText('Beast').closest('a')).toHaveAttribute('href', '/characters/1');
  });

  test('affiche tous les personnages passés en paramètre', () => {
    const characters = [
      { id: '1', name: 'Beast' },
      { id: '2', name: 'Deadpool' },
      { id: '3', name: 'Iron Man' }
    ];
    render(
      <MemoryRouter>
        <CharactersList characters={characters} />
      </MemoryRouter>
    );
    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(3);
    expect(screen.getByText('Beast')).toBeInTheDocument();
    expect(screen.getByText('Deadpool')).toBeInTheDocument();
    expect(screen.getByText('Iron Man')).toBeInTheDocument();
  });

  test('affiche une liste vide si aucun personnage', () => {
    render(
      <MemoryRouter>
        <CharactersList characters={[]} />
      </MemoryRouter>
    );
    expect(screen.getByRole('list')).toBeEmptyDOMElement();
  });

  test('affiche une liste vide si characters n\'est pas passé', () => {
    render(
      <MemoryRouter>
        <CharactersList />
      </MemoryRouter>
    );
    expect(screen.getByRole('list')).toBeEmptyDOMElement();
  });
});
