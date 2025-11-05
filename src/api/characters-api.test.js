import { describe, expect, jest, test } from '@jest/globals'
import { getCharacters, getCharacterById } from './characters-api';

// Mock the characters data for testing purposes
const base = [
  { id: '1', name: 'B', modified: '2020-01-01T00:00:00Z' },
  { id: '2', name: 'A', modified: '2021-01-01T00:00:00Z' },
  { id: '3', name: 'C', modified: '2019-01-01T00:00:00Z' },
];
jest.mock('../data/characters.json', () => base);

// Test suite for characters-api.js
describe('characters-api', () => {

    // Test for getCharacters function
    describe('getCharacters', () => {

        // Test to check if the function returns the full list of characters
        test('should return the list of characters sorted by name asc (default)', () => {
            const result = getCharacters();
            expect(result.map(c => c.name)).toEqual(['A', 'B', 'C']);
        });
        test('trie par nom descendant', () => {
            const result = getCharacters({ sortBy: 'name', order: 'desc' });
            expect(result.map(c => c.name)).toEqual(['C', 'B', 'A']);
        });
        test('trie par date de modification ascendante', () => {
            const result = getCharacters({ sortBy: 'modified', order: 'asc' });
            expect(result.map(c => c.id)).toEqual(['3', '1', '2']);
        });
        test('trie par date de modification descendante', () => {
            const result = getCharacters({ sortBy: 'modified', order: 'desc' });
            expect(result.map(c => c.id)).toEqual(['2', '1', '3']);
        });
    });

    // Test for getCharacterById function
    describe('getCharacterById', () => {
        // Test to check if the function returns the correct character for a valid ID
        test('should return the correct character when a valid ID is provided', () => {
            const result = getCharacterById('1');
            expect(result).toEqual({ id: '1', name: 'B', modified: '2020-01-01T00:00:00Z' });
        });

        // Test to check if the function throws an error when an invalid ID is provided
        test('should throw an error when character with provided ID is not found', () => {
            expect(() => {
                getCharacterById('999');
            }).toThrow('Character with ID "999" not found');
        });
    });

});