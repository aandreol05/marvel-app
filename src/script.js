// Fonction pour récupérer les personnages depuis l'API locale
async function getCharacters() {
    try {
        const response = await fetch('http://localhost:3000/data/characters.json');
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        console.log('Personnages Marvel:', data);

        // Récupérer l'élément ul par son identifiant
        const ul = document.getElementById('characters');
        if (ul && Array.isArray(data)) {
            ul.innerHTML = '';
            data.forEach(character => {
                const li = document.createElement('li');
                li.textContent = character;
                ul.appendChild(li);
            });
        }
        return data;
    } catch (error) {
        console.error('Erreur:', error);
    }
}

// Appel de la fonction au chargement de la page
getCharacters();
