import { useLoaderData } from "react-router";
import { useEffect } from "react";
import CharacterDetail from "../components/CharacterDetail";

const CharacterDetailPage = () => {
    const character  = useLoaderData();

    console.log(character);

    useEffect(() => {
        // change the title of the page with character name
        document.title = `${character.name} | Marvel App`;
    }, [character]);
    
    return (
        <>
            <h2>Marvel Character Detail</h2>
            <CharacterDetail character={character} />
        </>
    );
};

export default CharacterDetailPage;