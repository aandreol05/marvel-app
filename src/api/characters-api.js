import characters from '../data/characters.json';

/**
 * Retourne la liste complète des personnages Marvel
 * @returns {Array} Liste des personnages
 */
export const getCharacters = () => {
  return characters;
};

/**
 * Retourne un personnage spécifique en fonction de son ID
 * @param {number} id - L'ID du personnage à rechercher
 * @returns {Object|undefined} Le personnage trouvé ou undefined si non trouvé
 */
export const getCharacterById = (id) => {
  return characters.find(character => character.id === id);
};