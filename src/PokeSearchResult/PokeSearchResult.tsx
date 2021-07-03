import React from 'react'
import '../PokeSearchResult/PokeSearchResult.css'
import { PokemonSchema } from '../types/pokemonSchema';

interface PokeSearchResultProps{
   
    //onPokemonClick: (pokename: string) => void,
    selectedPokemon: PokemonSchema | undefined;
    
}
const PokeSearchResult = ({selectedPokemon}:PokeSearchResultProps) => {
    console.log(selectedPokemon);
  
    const { id, name, height,base_experience,weight,sprites } = selectedPokemon || {};
    return (
        <div className="poke-result-card" >
            {selectedPokemon ?
                (<div>
                <img src={sprites?.animated||sprites?.normal} alt="Pokemon_image"/>
                <p>{id}</p>
                <p>{name}</p>
                <p>{height}</p>
                <p>{weight}</p>
                 <p>{base_experience}</p>

                </div>)
                : <h2>Welcome to Pokemon World</h2>}
            
        </div>
    )
}

export default PokeSearchResult;