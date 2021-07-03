export interface UnpatchedPokemonSchema{  //here every data type is stringified from original data
    id?: string;
    species_id?: string;
    height?: string;
    weight?: string;
    base_experience?: string;
    order?: string;
    is_default?: string;
    name?: string;
    sprites?: string;
}

export interface PokemonSpriteSchema{
    normal?: string,
    animated?:string
}

export interface PokemonSchema{  //to convert sprites into object format from string 
    id?: string;
    species_id?: string;
    height?: string;
    weight?: string;
    base_experience?: string;
    order?: string;
    is_default?: string;
    name?: string;
    sprites?: PokemonSpriteSchema;
}



