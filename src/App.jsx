import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CharactersList from './components/CharactersList'

function App() {
  return (
    <div>
      <h1>Personnages Marvel</h1>
      <CharactersList />
    </div>
  );
}

export default App;
