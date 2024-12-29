import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CharacterDetails = () => {
    const { id } = useParams();
    console.log("ID: ", id);
    const [character, setCharacter] = useState(null);
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const hash = import.meta.env.VITE_HASH;

    useEffect(() => {
        axios.get(
            `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${publicKey}&hash=${hash}`
        )
        .then((response) => {
            console.log("Data: ", response.data.data.results[0]);
            const character = response.data.data.results[0];
            setCharacter(character);
            console.log("Character: ", character);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
    }, [id]);

    if (!character) {
        return <p>Loading...</p>;
    }
    
    return (
        <div className="character-detail">
            <h2>{character.name}</h2>
            <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                className="character-thumbnail" style={{ width: '150px' }}
            />
            <p><strong>Description:</strong> {character.description || 'No description available.'}</p>
            <strong>Comics:</strong>
            <ul>
                {character.comics.items.map((comic) => (
                    <li key={comic.resourceURI}>{comic.name}</li>
                ))}
            </ul>   
        </div>
    );
};   

export default CharacterDetails;