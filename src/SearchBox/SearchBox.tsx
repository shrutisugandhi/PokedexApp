import React from 'react'
import '../SearchBox/SearchBox.css'

interface SearchBoxProps{    //had to pass any data or event as props in interface 
    searchPokemon: (inputVal: string) => void;    
}

const SearchBox = ({searchPokemon}:SearchBoxProps) => {
    return (
       
        <input type="text"
            placeholder="Search Pokedex.."
            className="search"
            onChange={(e) => searchPokemon(e.target.value)}
        />
       
    )
}

export default SearchBox;