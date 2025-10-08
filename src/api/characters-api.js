import characters from '../data/characters.json'

/**
 * returns the list of characters
 * @returns 
 */
export const getCharacters = () => {
  return characters;
}

/**
 * returns a character by id
 * @param {*} id 
 * @returns 
 * @throws {Error} Si aucun personnage n'est trouvé avec l'ID fourni
 */
export const getCharacterById = (id) => {
  const character = characters.find(character => character.id === id);
  
  if (!character) {
    throw new Error(`Character with ID "${id}" not found`);
  }
  
  return character;
}