import CharactersList from "../components/CharactersList";
import NumberOfCharacters from "../components/NumberOfCharacters";
import { useLoaderData, useNavigate, useSearchParams } from "react-router";
import { useEffect } from "react";

const sortOptions = [
  { value: 'name', label: 'Nom' },
  { value: 'modified', label: 'Date de modification' }
];
const orderOptions = [
  { value: 'asc', label: 'Croissant' },
  { value: 'desc', label: 'Décroissant' }
];

const CharactersPage = () => {
    // change the title of the page
    document.title = "Characters | Marvel App";

    // Get the list of characters from the API
    const { characters } = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const sortBy = searchParams.get('sortBy') || 'name';
    const order = searchParams.get('order') || 'asc';

    // Gestion du changement de tri
    const handleSortChange = (e) => {
      setSearchParams({ sortBy: e.target.value, order });
    };
    const handleOrderChange = (e) => {
      setSearchParams({ sortBy, order: e.target.value });
    };

    return (
        <>
            <h2>Marvel Characters</h2>
            <style>{`
              .sort-controls {
                display: flex;
                gap: 16px;
                margin-bottom: 16px;
                align-items: center;
              }
              .sort-controls label {
                font-weight: 500;
                color: #222;
              }
              .sort-controls select {
                margin-left: 8px;
                padding: 6px 12px;
                border-radius: 4px;
                border: 1px solid #ccc;
                background: #f8f8f8;
                font-size: 1rem;
                transition: border 0.2s;
              }
              .sort-controls select:focus {
                border: 1.5px solid #007bff;
                outline: none;
                background: #fff;
              }
            `}</style>
            <div className="sort-controls">
              <label>
                Trier par :
                <select value={sortBy} onChange={handleSortChange} data-testid="sort-select">
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </label>
              <label>
                Ordre :
                <select value={order} onChange={handleOrderChange} data-testid="order-select">
                  {orderOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </label>
            </div>
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;