// Fonction pour récupérer les personnages depuis l'API locale
async function getCharacters() {
    try {
        const response = await fetch('http://localhost:3000/data/characters.json');
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        console.log('Personnages Marvel:', data);
        return data;
    } catch (error) {
        console.error('Erreur:', error);
    }
}

// Appel de la fonction au chargement de la page
getCharacters();
