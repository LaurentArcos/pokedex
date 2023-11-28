import { fetchPokemon } from "./fetchPokemon";

export const fetchPokemonList = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9');

    const data = await response.json();
    
    const promises = data.results.map(
        async (pokemon: {name: string}) => 
            (await fetchPokemon(pokemon.name))
    );

    return Promise.all(promises);
}