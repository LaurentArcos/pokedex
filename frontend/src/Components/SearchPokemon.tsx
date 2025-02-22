// src/Components/SearchPokemon.tsx
import { SyntheticEvent, useState } from "react";
import { SearchPokemonProps } from "../@types/Pokemon";
import "../assets/styles/searchPokemon.scss";
import { fetchPokemonDetails } from "../api/fetchPokemonDetails";
import { fetchPokemonList } from "../api/fetchPokemonList";

const SearchPokemon = ({ setPokemonList }: SearchPokemonProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (inputValue.trim() === "") return; // Ne rien faire si la recherche est vide
    try {
      // On utilise fetchPokemonDetails pour récupérer les infos complètes en français
      const result = await fetchPokemonDetails(inputValue.toLowerCase());
      if (result) {
        setPokemonList([result]);
      } else {
        console.error("Pokémon non trouvé");
      }
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };

  const handleReset = async () => {
    try {
      // Par exemple, recharger la première page de la liste
      const { pokemonData } = await fetchPokemonList(1);
      const list = await pokemonData;
      setPokemonList(list);
      setInputValue("");
    } catch (error) {
      console.error("Erreur lors du reset :", error);
    }
  };

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Search Pokemon" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
};

export default SearchPokemon;
