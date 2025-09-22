import characters from '../data/characters.json'

function CharactersList() {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  );
}

export default CharactersList;
