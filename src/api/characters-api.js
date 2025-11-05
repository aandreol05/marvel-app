import characters from '../data/characters.json'

/**
 * returns the list of characters, sorted if sortBy/order are provided
 * @param {Object} options
 * @param {'name'|'modified'} [options.sortBy]
 * @param {'asc'|'desc'} [options.order]
 * @returns {Array}
 */
export const getCharacters = ({ sortBy = 'name', order = 'asc' } = {}) => {
  let chars = [...characters];
  if (sortBy === 'name') {
    chars.sort((a, b) => {
      if (!a.name) return 1;
      if (!b.name) return -1;
      return order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
  } else if (sortBy === 'modified') {
    chars.sort((a, b) => {
      const dateA = new Date(a.modified);
      const dateB = new Date(b.modified);
      return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }
  return chars;
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