import React from 'react'
import '../PokeCard/PokeCard.css'
import { PokemonSchema } from '../types/pokemonSchema';

interface PokeCardProps{
    spriteUrl?: string,
    name: string,
    onPokemonClick:(name:string)=>void
}
const PokeCard = ({ spriteUrl,name,onPokemonClick }:PokeCardProps) => {
    return (
        <div className="pokecard" onClick={()=>onPokemonClick(name)}>
            <img src={spriteUrl} alt="pokemon" className="pokemon-sprite"/>
            <p>{name}</p>
        </div>
    )
}

export default PokeCard;


//Typescript 
//javascript with type is typescript
//typescript.org

//Basic Types:
//Primitive Types :
//Boolean,Number,String,Array,enum,void,any,never,null,undefined

//Interfaces
//Allow to define type of JS Objects
//Eg. const stud={
// name:'shruti',age:22,subjects:["physics","maths"]
//           }

//Interface Student{name:string,age:number,subjects:string[]}

//const print=(stud)=>{console.log(`${stud.name})}