import React from 'react'
import '../Pokedex/Pokedex.css'
import PokeList from '../PokeList/PokeList'
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult'
import SearchBox from '../SearchBox/SearchBox'
import { PokemonSchema } from '../types/pokemonSchema'

interface PokedexProps{
    currentSearchPokemon: PokemonSchema[],
    searchPokemon: (inputVal: string) => void,
    onPokemonClick: (pokename: string) => void,
    selectedPokemon:PokemonSchema | undefined
    
}

const Pokedex = ({currentSearchPokemon,searchPokemon,selectedPokemon,onPokemonClick}:PokedexProps )=> {
    return (
       
        <div className="pokedex-container">
            
            <div className="pokelist-container">
                <SearchBox searchPokemon={searchPokemon}/>
                <PokeList onPokemonClick={onPokemonClick} currentSearchPokemon={currentSearchPokemon}/>
           </div>
            <div className="pokesearchresult-container ">
                <PokeSearchResult selectedPokemon={selectedPokemon}/>
            </div>

        
        </div >

        )
}

export default Pokedex;