import { fetchPokemonDetails } from "./fetchPokemonDetails";

export const fetchPokemonList = async (page: number) => {
  const offset = 9 * (page - 1);
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`);
  const data = await response.json();
  
  // Ici, on récupère les détails enrichis (avec le nom en français) pour chaque Pokémon
  const promises = data.results.map(
    async (pokemon: { name: string }) => (await fetchPokemonDetails(pokemon.name))
  );


  return {
    pokemonData: Promise.all(promises),
    pokemonCount: data.count,
  };
};
