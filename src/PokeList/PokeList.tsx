import React from 'react'
import PokeCard from '../PokeCard/PokeCard';
import '../PokeList/PokeList.css'
import { PokemonSchema } from '../types/pokemonSchema';

interface PokeListProps{
    currentSearchPokemon: PokemonSchema[],
     onPokemonClick: (pokename: string) => void,
}
const PokeList = ({currentSearchPokemon,onPokemonClick}:PokeListProps) => {
    return (
        <div className="pokelist">
            {
                currentSearchPokemon.map((item) => {
                    return (
                        item.name && (
                        <PokeCard key={item.id} name={item.name}
                                spriteUrl={item.sprites?.normal}
                                onPokemonClick={onPokemonClick}
                        />
                        )
                       
                   ) 
                })
            }
        
        
        </div>
    )
}

export default PokeList;