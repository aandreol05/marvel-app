import { useEffect } from 'react'
import CharactersList from '../components/CharactersList'
import NumberOfCharacters from '../components/NumberOfCharacters'
import characters from '../data/characters.json'

function CharactersPage() {
  useEffect(() => {
    document.title = 'Marvel App';
  }, []);

    // Prendre seulement les 4 premiers personnages
  //const firstFourCharacters = characters.slice(0, 4);

  return (
    <div>
      <h2>Marvel Characters</h2>
      <CharactersList characters={characters} />
    </div>
  );
}

export default CharactersPage;

