// src/Components/SearchPokemon.tsx
import { SyntheticEvent, useState } from "react";
import { SearchPokemonProps } from "../@types/Pokemon";
import "../assets/styles/searchPokemon.scss";
import { fetchPokemonDetails } from "../api/fetchPokemonDetails";
import { useFrenchToEnglishMapping } from "../hooks/useFrenchToEnglishMapping";

interface ExtendedSearchPokemonProps extends SearchPokemonProps {
  originalPokemonList: any[];
  setPokemonCount: (count: number) => void;
}

const SearchPokemon = ({ setPokemonList, originalPokemonList, setPokemonCount }: ExtendedSearchPokemonProps) => {
  const [inputValue, setInputValue] = useState("");
  const { mapping, loading: mappingLoading } = useFrenchToEnglishMapping();

  const normalizeString = (str: string) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    
    const normalizedInput = normalizeString(inputValue);

    // Filtrer la liste actuelle (celle de la page en cours)
    const filtered = originalPokemonList.filter(pokemon =>
      normalizeString(pokemon.name).includes(normalizedInput)
    );

    if (filtered.length > 0) {
      setPokemonList(filtered);
      setPokemonCount(filtered.length); // mise à jour du nombre pour la pagination
    } else {
      let searchName = inputValue.toLowerCase();
      // Si le mapping est prêt et que l'input correspond à un nom français, le convertir en nom anglais
      if (!mappingLoading && mapping[normalizedInput]) {
        searchName = mapping[normalizedInput];
      }
      const result = await fetchPokemonDetails(searchName);
      if (result) {
        setPokemonList([result]);
        setPokemonCount(1); // résultat unique
      } else {
        setPokemonList([]);
        setPokemonCount(0);
      }
    }
  };

  const handleReset = () => {
    setPokemonList(originalPokemonList);
    setPokemonCount(originalPokemonList.length);
    setInputValue("");
  };

  return (
<div className="main-container">
  <form onSubmit={handleSubmit}>
    <input 
      type="text" 
      placeholder="Rechercher un Pokémon" 
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)} 
    />
    <div className="button-container">
      <button className="search-button" type="submit">Rechercher</button>
      <button className="reset-button" type="button" onClick={handleReset}>Réinitialiser</button>
    </div>
  </form>
</div>
  );
};

export default SearchPokemon;
