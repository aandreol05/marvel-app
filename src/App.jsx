import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CharactersList from './components/CharactersList'
import NumberOfCharacters from './components/NumberOfCharacters'
import characters from './data/characters.json'

function App() {
  return (
    <div>
      <h1>Personnages Marvel</h1>
      <NumberOfCharacters characters={characters} />
      <CharactersList characters={characters} />
    </div>
  );
}

export default App;
