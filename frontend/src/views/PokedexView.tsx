// src/views/PokedexView.tsx
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Pokedex from "../Components/Pokedex";
import SearchPokemon from "../Components/SearchPokemon";
import { fetchPokemonList } from "../api/fetchPokemonList";
import { ToastContainer } from "react-toastify";
import { Pokemon } from "../types/Pokemon";

const PokedexView = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokemonCount, setPokemonCount] = useState(0);
  const [page, setPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    (async () => {
      const { pokemonData, pokemonCount } = await fetchPokemonList(page);
      const list = await pokemonData;
      setPokemonList(list);
      setPokemonCount(pokemonCount);
      if (!selectedPokemon && list.length > 0) {
        const randomIndex = Math.floor(Math.random() * list.length);
        setSelectedPokemon(list[randomIndex]);
      }
    })();
  }, [page]);

  return (
    <>
      <ToastContainer />
      <HeroSection
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      <SearchPokemon setPokemonList={setPokemonList} />
      <Pokedex
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
        pokemonCount={pokemonCount}
        page={page}
        setPage={setPage}
        onSelect={setSelectedPokemon} // Mise à jour du Pokémon sélectionné via la fonction onSelect
      />
      <Footer />
    </>
  );
};

export default PokedexView;
