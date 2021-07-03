import React from 'react';
import '../App/App.css'
import { pokemonData } from '../Data/pokemondata';
import Pokedex from '../Pokedex/Pokedex';
import {  PokemonSchema, PokemonSpriteSchema, UnpatchedPokemonSchema } from '../types/pokemonSchema';

interface AppState{
  searchString:string,
  allPokemons: PokemonSchema[],
  currentSearchPokemon: PokemonSchema[],
  currentSelectedPokemon:PokemonSchema | undefined
}


class App extends React.Component<any, AppState> {
  state = {
    searchString: "",
    allPokemons: [],
    currentSearchPokemon: [],
    currentSelectedPokemon:undefined
  }
   patchPokeData = (data:UnpatchedPokemonSchema[]) => {   //function
    const extractSpriteData = data.map((item) => {
      let parsedSprites: PokemonSpriteSchema = {
        normal: undefined,
        animated:undefined
      }
      try {
        parsedSprites = item.sprites && JSON.parse(item.sprites);
      //  console.log(parsedSprites)
      } catch (error){
        console.log("Exception while parsing pokemon data sprites", error);
      }
      const updatedPokemonData: PokemonSchema = {
        ...item,         //orginal data all fields copied to patchedPokemon except sprite value in normal and animated format based on inteface created
        sprites:parsedSprites
      }
      return updatedPokemonData
    })
    return extractSpriteData;
  }
  componentDidMount() {
    console.log("component was mounted")
    const pokeData = pokemonData;
  // console.log(pokeData)
    
    //Patch stringified pokemon sprites
    const patchedPokemons: PokemonSchema[] = this.patchPokeData(pokeData);
  

    //update State with patched pokemon
    this.setState({
      allPokemons: patchedPokemons,
      currentSearchPokemon:patchedPokemons  //initial value of current search pokemon is all values of pokemon
    })
   // console.log(patchedPokemons)
  }

  handleInputChange = (inputValue: string)=>{
   // console.log(inputValue);
    //filter search pokemon
    const {allPokemons}=this.state;  //destructuring allPokemon variable from state object
    const currentSearchPokemon = allPokemons.filter((item: PokemonSchema) => {
      return (
           item.name && item.name.toLowerCase().includes(inputValue.toLowerCase())
         )
    })
    this.setState({searchString:inputValue,currentSearchPokemon:currentSearchPokemon})
  }

  handleClickEvent = (pokemonName: string) => {
    const { currentSelectedPokemon } = this.state;
    const { allPokemons } = this.state;
    //find selected pokemon from allPokemon
    //update state
    const selectedPoke = allPokemons.find((item: PokemonSchema) => {
     return  item.name === pokemonName;
    });

    this.setState({currentSelectedPokemon:selectedPoke})
  }
  render() {
  return (
    <div className="App">
      <h1>Pokedex App</h1>
      <Pokedex 
        currentSearchPokemon={this.state.currentSearchPokemon}
        searchPokemon={this.handleInputChange}    
        selectedPokemon={this.state.currentSelectedPokemon}
        onPokemonClick={this.handleClickEvent} />
    </div>
  );
  }

}

export default App;


//React.component takes 2 arguments say "any" or an interface type for both props and states