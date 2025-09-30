import { Link } from "react-router";

function CharactersList({ characters = [] }) {
  return (
    <div>
      <style>
        {`
          li a {
            color: #333;
            text-decoration: none;
          }
          
          li a:hover {
            color: #007bff;
            text-decoration: underline;
          }
        `}
      </style>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`}>
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharactersList;