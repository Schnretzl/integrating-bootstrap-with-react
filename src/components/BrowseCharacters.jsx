import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CharacterListStyles.css";
import { useParams, useNavigate } from "react-router-dom";

const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const hash = import.meta.env.VITE_HASH;

const BrowseCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(
            `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`
        )
        .then((response) => {
            const characters = response.data.data.results;
            setCharacters(characters);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
    }, []);

    const handleCharacterClick = (character) => {
        setSelectedCharacter(character);
        console.log("Character clicked: ", character);
        navigate(`/character/${character.id}`);
    };
    
    return (
        <div>
            <div className="thumbnails">
                {characters.map((character) => (
                    <div key={character.id} className="character" onClick={() => handleCharacterClick(character)}>
                        <img
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={character.name}
                            className="character-thumbnail"
                        />
                        <p className="character-name">{character.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrowseCharacters;