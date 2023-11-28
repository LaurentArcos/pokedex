import { useEffect, useState } from "react"
import Footer from "../Components/Footer"
import HeroSection from "../Components/HeroSection"
import Pokedex from "../Components/Pokedex"
import { Pokemon } from "../@types/Pokemon"
import SearchPokemon from "../Components/SearchPokemon"
import { fetchPokemonList } from "../api/fetchPokemonList"

const PokedexView = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [pokemonCount, setPokemonCount] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        (async () => {
            const { pokemonData, pokemonCount } = await fetchPokemonList(page);

            setPokemonCount(pokemonCount);
            setPokemonList(await pokemonData);
        })();

        return () => {
            console.log("Pokedex Unmount");
        }
    }, [])

    useEffect(() => {
        console.log("Change pokemon list");
    }, [pokemonList])

    return (
        <>
            <HeroSection />
            <SearchPokemon setPokemonList={setPokemonList} />
            <Pokedex
                pokemonList={pokemonList}
                setPokemonList={setPokemonList}
                pokemonCount={pokemonCount}
                page={page}
                setPage={setPage} />
            <Footer />
        </>
    )
}

export default PokedexView