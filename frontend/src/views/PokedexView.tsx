import { useEffect, useState } from "react"
import Footer from "../Components/Footer"
import HeroSection from "../Components/HeroSection"
import Pokedex from "../Components/Pokedex"
import { Pokemon } from "../@types/Pokemon"
import SearchPokemon from "../Components/SearchPokemon"
import { fetchPokemonList } from "../api/fetchPokemonList"

const PokedexView = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])

    useEffect(() => {
        (async () => {
            setPokemonList(await fetchPokemonList());
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
            <HeroSection/>
            <SearchPokemon setPokemonList={setPokemonList} />
            <Pokedex pokemonList={pokemonList}/>
            <Footer/>
        </>
    )
}

export default PokedexView