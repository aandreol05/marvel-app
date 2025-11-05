import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail', () => {
  const character = {
    id: '1009175',
    name: 'Beast',
    description: 'A mutant with ape-like superhuman physical strength and agility.',
    modified: '2014-01-13T14:48:32-0500',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/80/511a79a0451a3',
      extension: 'jpg'
    }
  };

  test('affiche correctement les informations du personnage et une image si le thumbnail existe', () => {
    render(<CharacterDetail character={character} />);
    expect(screen.getByRole('heading', { level: 3, name: 'Beast' })).toBeInTheDocument();
    expect(screen.getByText('A mutant with ape-like superhuman physical strength and agility.')).toBeInTheDocument();
    expect(screen.getByText('1009175')).toBeInTheDocument();
    // Il doit y avoir une image
    expect(screen.queryAllByRole('img').length).toBe(1);
    expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringContaining('511a79a0451a3'));
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Beast');
  });

  test('affiche un message si le personnage est introuvable', () => {
    render(<CharacterDetail character={null} />);
    expect(screen.getByText('Character not found')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
  
  test('n\'affiche pas d\'image si thumbnail est manquant', () => {
    const characterNoThumb = {
        id: '1009176',
        name: 'NoThumb',
        description: 'No image here',
        modified: '2014-01-13T14:48:32-0500'
        // pas de thumbnail
    };
    render(<CharacterDetail character={characterNoThumb} />);
    expect(screen.queryAllByRole('img').length).toBe(0);
    // On vérifie qu'aucun texte "No image available" n'est affiché, car le composant ne l'affiche pas
    expect(screen.queryByText('No image available')).not.toBeInTheDocument();
    // On vérifie que le nom, l'id et la description sont bien présents
    expect(screen.getByRole('heading', { level: 3, name: 'NoThumb' })).toBeInTheDocument();
    expect(screen.getByText('1009176')).toBeInTheDocument();
    expect(screen.getByText('No image here')).toBeInTheDocument();
    });

    test('affiche le message "No description available" si description est vide', () => {
    const characterNoDesc = {
        id: '1009177',
        name: 'NoDesc',
        description: '',
        modified: '2014-01-13T14:48:32-0500',
        thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/80/511a79a0451a3',
        extension: 'jpg'
        }
    };
    render(<CharacterDetail character={characterNoDesc} />);
    expect(screen.getByText('No description available')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    });

  test('affiche le nom et l\'id même si la description est absente', () => {
    const characterNoDesc = {
      id: '1009178',
      name: 'NoDesc2',
      description: '',
      modified: '2014-01-13T14:48:32-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/80/511a79a0451a3',
        extension: 'jpg'
      }
    };
    render(<CharacterDetail character={characterNoDesc} />);
    expect(screen.getByRole('heading', { level: 3, name: 'NoDesc2' })).toBeInTheDocument();
    expect(screen.getByText('1009178')).toBeInTheDocument();
  });

  test('affiche correctement les informations du personnage sans image si le thumbnail est absent', () => {
    const characterNoThumb = {
      id: '1009179',
      name: 'NoImage',
      description: 'Personnage sans image',
      modified: '2014-01-13T14:48:32-0500'
      // pas de thumbnail
    };
    render(<CharacterDetail character={characterNoThumb} />);
    expect(screen.getByRole('heading', { level: 3, name: 'NoImage' })).toBeInTheDocument();
    expect(screen.getByText('1009179')).toBeInTheDocument();
    expect(screen.getByText('Personnage sans image')).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'NoImage' })).toBeNull();
  });

  test('affiche "Character not found" lorsque le personnage n\'est pas passé en paramètre', () => {
    render(<CharacterDetail />);
    expect(screen.getByText('Character not found')).toBeInTheDocument();
  });
});