export const fetchPokemon = async (pokemon: string | number) => {
  try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await response.json();

      return data;
  } catch (error) {
      console.error(error);
  }
}