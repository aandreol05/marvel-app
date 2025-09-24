/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import CharactersList from './components/CharactersList'
// import NumberOfCharacters from './components/NumberOfCharacters'
// import characters from './data/characters.json'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CharactersPage from './pages/CharactersPage'

function App() {
  return (
    <div>
      <CharactersPage />
      {/* 
      <ContactPage />
      <AboutPage />
      <h1>Personnages Marvel</h1>
      <NumberOfCharacters characters={characters} />
      <CharactersList characters={characters} />
      }
    </div>
  );
}

export default App;*/

import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from './routes';

// router to navigate through the app
const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
