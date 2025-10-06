const CharacterDetail = ({ character }) => {
    if (!character) {
        return <p>Character not found</p>;
    }

    // Construire l'URL complète de l'image
    const imageUrl = character.thumbnail 
        ? `${character.thumbnail.path}.${character.thumbnail.extension}`
        : null;

    // Formater la date de modification
    const formattedDate = character.modified 
        ? new Date(character.modified).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
        : 'N/A';

    return (
        <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px', 
            border: '1px solid #ccc', 
            borderRadius: '8px',
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center'
        }}>
            <h3 style={{ marginBottom: '20px' }}>{character.name}</h3>
            
            {imageUrl && (
                <img 
                    src={imageUrl} 
                    alt={character.name}
                    style={{ 
                        width: '200px', 
                        height: '200px', 
                        objectFit: 'cover',
                        borderRadius: '8px',
                        marginBottom: '20px'
                    }}
                />
            )}
            
            <div style={{ marginBottom: '10px' }}>
                <strong>ID:</strong> {character.id}
            </div>
            
            <div style={{ marginBottom: '10px' }}>
                <strong>Name:</strong> {character.name}
            </div>
            
            <div style={{ marginBottom: '10px' }}>
                <strong>Description:</strong> {character.description || 'No description available'}
            </div>
            
            <div style={{ marginBottom: '10px' }}>
                <strong>Last Modified:</strong> {formattedDate}
            </div>
        </div>
    );
};

export default CharacterDetail;